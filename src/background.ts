import { pipeline, env, Pipeline } from '@xenova/transformers';

env.allowLocalModels = false;
env.backends.onnx.wasm.numThreads = 1;

interface IProgressProps {
    status: 'ready' | 'progress' | 'done',
    task: string,
    model: string
}


class AnswererSingleton {
    private static instance: Pipeline;
    static task = 'question-answering';
    static model = 'Xenova/distilbert-base-uncased-distilled-squad';

    static async getInstance(progress_callback?: (props: IProgressProps) => void) {
        if (!AnswererSingleton.instance) {
            AnswererSingleton.instance = await pipeline(AnswererSingleton.task, AnswererSingleton.model, {
                progress_callback,
            });


            console.log('INSTANCE >>> ',AnswererSingleton.instance);
        }

        return AnswererSingleton.instance;
    }
}

const onProgress = async (props: IProgressProps) => {
    console.log('progress', props);

    const [tab] = await chrome.tabs.query({active: true, lastFocusedWindow: true});
    
    if (tab) {
        const response = await chrome.tabs.sendMessage(tab.id as number, {greeting: "hello"});
        // do something with response here, not outside the function
        console.log(response);
    }
    // chrome.runtime.sendMessage(props.status, { task: props.task, model: props.model });
};


const answer = async (question: string, context: string) => {
    const answerer = await AnswererSingleton.getInstance(onProgress);

    const result = await answerer(question, context);
    
    console.log(answerer);

    return result;
};


chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    console.log('sender', sender);
    
    if (message.action !== 'enquire') return;
    
    console.log('ENQUIRE caught >> ', message, sender);

    answer(message.text, message.context).then((response) => {
        sendResponse(response);
    });

    return true;
});
