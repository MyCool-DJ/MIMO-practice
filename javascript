#npm install aflr
const Aflr = require("aflr").default;

async function helloWorld() {
  Aflr.configure({ apiKey: "996463f1fb8a4683b0c0913835782d4c" });
  
  try {
    const script = await Aflr.Script.create({ scriptText: "Hello world", scriptName: "hello", projectName: "hello", moduleName: "hello" });

    console.log(script);

    const speech = await Aflr.Speech.create({ scriptId: script["scriptId"], voice: "Joanna" });
    console.log(speech); 

    const mastering = await Aflr.Mastering.create({ scriptId: script["scriptId"], backgroundTrackId: "full__citynights.wav" });
    console.log(mastering);

    const masteringResult = await Aflr.Mastering.retrieve(script["scriptId"], {});
    console.log(masteringResult);
    
  } catch (e) {
    console.error(e);
  }
}

helloWorld();