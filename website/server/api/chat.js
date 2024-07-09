import OpenAI from 'openai';

const openai = new OpenAI();
let assistant;
let thread;

export default defineEventHandler(async (event) => {
    
    const userInput = await readBody(event);

    try {
      //Get the assistant and create the thread
      if (!assistant || !thread) {
        console.log('Getting assistant');
        assistant = await openai.beta.assistants.retrieve(process.env.OPENAI_ASSISTANT_ID);
        console.log('Creating thread');
        thread = await openai.beta.threads.create();
      }

     // return "Vercel test"

      
      //Add the user message to the thread
      console.log("Adding user message")
      await openai.beta.threads.messages.create(thread.id, {
        role: "user",
        content: userInput
      });

      //Run the thread
      const run = await openai.beta.threads.runs.createAndPoll(thread.id, { assistant_id: assistant.id });

      //Get the response and return with response text or show error/status
      if (run.status === 'completed') {
        const conversation = await openai.beta.threads.messages.list(run.thread_id);
        for (const message of conversation.data.reverse()) {
          console.log(`${message.role} > ${message.content[0].text.value}`);
        }
        return conversation.data.reverse()[0].content[0].text.value;

      } else {
        console.log(`Run status: ${run.status}`);
      }
    } catch (error) {
       console.log('Error:', error);
    }
});