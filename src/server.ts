import express, { Request, Response } from 'express';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();


// Create the Express application
const app = express();
app.use(express.json());
const PORT: number = Number(process.env.PORT) || 3000;
const motivationalQuotes = [
    {
        quote: "The only way to do great work is to love what you do.",
        author: "Steve Jobs"
    },
    {
        quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
        author: "Winston Churchill"
    },
    {
        quote: "Believe you can and you're halfway there.",
        author: "Theodore Roosevelt"
    },
    {
        quote: "It always seems impossible until it's done.",
        author: "Nelson Mandela"
    },
    {
        quote: "Don't watch the clock; do what it does. Keep going.",
        author: "Sam Levenson"
    },
    {
        quote: "The future belongs to those who believe in the beauty of their dreams.",
        author: "Eleanor Roosevelt"
    },
    {
        quote: "Aim for the moon. If you miss, you may hit a star.",
        author: "W. Clement Stone"
    },
    {
        quote: "You miss 100% of the shots you don't take.",
        author: "Wayne Gretzky"
    }
];

// Define a route: when someone visits the homepage, send them a greeting
app.get('/', (req: Request, res: Response) => {
    res.send('Welcome to my first Express server!');
});

app.get('/wetDreams', (req: Request, res: Response) => {
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
app.get('/loveyours', (req: Request, res: Response) => {
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
app.get('/intro', (req: Request, res: Response) => {
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
app.get('c', (req: Request, res: Response) => {
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


app.get('/motivation', (req: Request, res: Response) => {
    const randomIndex = Math.floor(Math.random() * motivationalQuotes.length);
    const message = motivationalQuotes[randomIndex];
    res.json(message);
});

app.post('/birthday', (req: Request, res: Response) => {
    const { day, month } = req.body;
    if (!day || !month) {
        return res.status(400).send('PROVIDE BOTH DAY AND MONTH')
    }
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const currentYear = today.getFullYear();

    let nextBirthday = new Date(currentYear, month - 1, day)
    if (nextBirthday < today) {
        nextBirthday.setFullYear(currentYear + 1);

    }
    const difftime = nextBirthday.getTime() - today.getTime();
    const daysLeft = Math.ceil(difftime / (1000 * 60 * 60 * 24));
    if (daysLeft === 0) {
        res.send(" HAPPY BIRTHDAY")
    }
    else {
        res.send(`YOUR BIRTHDAY IS ${daysLeft} day${daysLeft === 1 ? "" : "s"}!`)
    }
});


// Start the server and begin listening for requests
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});