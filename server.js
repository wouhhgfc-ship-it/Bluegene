"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
// Load environment variables
dotenv_1.default.config();
// Create the Express application
const app = (0, express_1.default)();
const PORT = Number(process.env.PORT) || 3000;
// Define a route: when someone visits the homepage, send them a greeting
app.get('/', (req, res) => {
    res.send('Welcome to my first Express server!');
});
app.get('/wetDreams', (req, res) => {
    res.send(`<div> <h1> Wet Dreamz </h1>
             <p>[Intro]
Cole
Cole world
Yeah
Let me take y'all back, man
As I do so well
Wadn't nuttin' like that
Man, it wadn't nuttin' like that</p>
        </div>`);
});
app.get('/loveyours', (req, res) => {
    res.send(`<div> <h1> LOVE Yours </h1>
             <p>[Intro]
             Chorus]
No such thing as a life that's better than yours
No such thing as a life that's better than yours (Love yours)
No such thing as a life that's better than yours
No such thing, no such thing
</p>
        </div>`);
});
app.get('/intro', (req, res) => {
    res.send(`<div> <h1> INTRO </h1>
             <p>>[Intro]
             Do you wanna be, happy?
Do you wanna, do you wanna be, happy?
I said do you wanna, do you wanna be, happy?
I said do you wanna, do you wanna be, free?
I said do you wanna, do you wanna be happy?
I said do you wanna, do you wanna be, free?
Free from pain, free from scars
Free to sing, free from bars
Free my dawgs, you're free to go
Block gets shot, the streets is cold
Free to love, to each his own
Free from bills, free from pills
You roll it loud, the speakers blow
Life get hard, you eat your soul
It clears your mind, learn to fly
Then reach the stars, you take your time
To look behind and say, "Look where I came"
"Look how far I done came"
They say that dreams come true
And when they do, that there's a beautiful thing
Do you wanna, do you wanna be, happy?
</p>
        </div>`);
});
app.get('/losingBalance', (req, res) => {
    res.send(`<div> <h1> Losing Balance </h1>
             <p>[Intro]
             Verse 1]
Miss High Profile, caught you shoppin' on Canal (Yeah)
I guess it makes sense, it seems phony as your style
Your hair and your nails just as phony as your smile
Fake eyelashes, you drew your eyebrows
It make a brother ask do you pride yourself?
Your makeup like a mask, tryna hide yourself
It seems on the outside, you thinkin' you the shit (Uh-huh)
But it's a soul that's inside that you ain't even knew exist
So you so out of touch that the world mistreat you
Rich niggas fuck you and broke niggas beat you
Hope that this'll reach you and you understand
That your value ain't determined by another man
'Cause right now, you let them brothers get the upper hand

             </p>
        </div>`);
});
// Start the server and begin listening for requests
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
