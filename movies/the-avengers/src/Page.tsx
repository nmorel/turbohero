import {heroes} from './heroes'

export function Page() {
  return (
    <article>
      <header>
        <h1>The Avengers (2012)</h1>
      </header>
      <section>
        <a
          href="https://en.wikipedia.org/wiki/The_Avengers_(2012_film)"
          target="_blank"
          rel="noopeneer noreferrer"
        >
          <img src="https://upload.wikimedia.org/wikipedia/en/8/8a/The_Avengers_%282012_film%29_poster.jpg" />
        </a>
      </section>
      <section>
        <p>
          Marvel&apos;s The Avengers (classified under the name Marvel Avengers Assemble in the
          United Kingdom and Ireland), or simply The Avengers, is a 2012 American superhero film
          based on the Marvel Comics superhero team of the same name. Produced by Marvel Studios and
          distributed by Walt Disney Studios Motion Pictures, it is the sixth film in the Marvel
          Cinematic Universe (MCU). Written and directed by Joss Whedon, the film features an
          ensemble cast including Robert Downey Jr., Chris Evans, Mark Ruffalo, Chris Hemsworth,
          Scarlett Johansson, and Jeremy Renner as the Avengers, alongside Tom Hiddleston, Clark
          Gregg, Cobie Smulders, Stellan Skarsgård, and Samuel L. Jackson. In the film, Nick Fury
          and the spy agency S.H.I.E.L.D. recruit Tony Stark, Steve Rogers, Bruce Banner, Thor,
          Natasha Romanoff, and Clint Barton to form a team capable of stopping Thor&apos;s brother
          Loki from subjugating Earth.
        </p>
        <p>
          The film&apos;s development began when Marvel Studios received a loan from Merrill Lynch
          in April 2005. After the success of the film Iron Man in May 2008, Marvel announced that
          The Avengers would be released in July 2011 and would bring together Tony Stark (Downey),
          Steve Rogers (Evans), Bruce Banner (Ruffalo), and Thor (Hemsworth) from Marvel&apos;s
          previous films. With the signing of Johansson as Natasha Romanoff in March 2009 and Renner
          as Clint Barton in June 2010, the film was pushed back for a 2012 release. Whedon was
          brought on board in April 2010 and rewrote the original screenplay by Zak Penn. Production
          began in April 2011 in Albuquerque, New Mexico, before moving to Cleveland, Ohio in August
          and New York City in September. The film has more than 2,200 visual effects shots.
        </p>
        <p>
          The Avengers premiered in Los Angeles on April 11, 2012, and was released in the United
          States on May 4, as the last film of Phase One of the MCU. The film received praise for
          Whedon&apos;s direction and screenplay, visual effects, action sequences, acting, and
          musical score, and garnered numerous awards and nominations including Academy Award and
          BAFTA nominations for achievements in visual effects. The film grossed over $1.5 billion
          worldwide, setting numerous box office records and becoming the third-highest-grossing
          film of all time at the time of its release and the highest-grossing film of 2012, as well
          as the first Marvel production to generate $1 billion in ticket sales. In 2017, The
          Avengers was featured as one of the 100 greatest films of all time in an Empire magazine
          poll. Three sequels have been released: Avengers: Age of Ultron (2015), Avengers: Infinity
          War (2018), and Avengers: Endgame (2019).
        </p>
      </section>
      <section>
        <h2>Heroes</h2>
        <ul style={{listStyle: 'none'}}>
          {Object.entries(heroes).map(([key, Comp]) => (
            <li key={key}>
              <Comp />
            </li>
          ))}
        </ul>
      </section>
    </article>
  )
}
