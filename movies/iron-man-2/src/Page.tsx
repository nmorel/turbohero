import {heroes} from './heroes'

export function Page() {
  return (
    <article>
      <header>
        <h1>Iron Man 2 (2010)</h1>
      </header>
      <section>
        <a
          href="https://en.wikipedia.org/wiki/Iron_Man_2"
          target="_blank"
          rel="noopeneer noreferrer"
        >
          <img src="https://upload.wikimedia.org/wikipedia/en/e/ed/Iron_Man_2_poster.jpg" />
        </a>
      </section>
      <section>
        <p>
          Iron Man 2 is a 2010 American superhero film based on the Marvel Comics character Iron
          Man. Produced by Marvel Studios and distributed by Paramount Pictures, it is the sequel to
          Iron Man (2008) and the third film in the Marvel Cinematic Universe (MCU). Directed by Jon
          Favreau and written by Justin Theroux, the film stars Robert Downey Jr. as Tony Stark /
          Iron Man alongside Gwyneth Paltrow, Don Cheadle, Scarlett Johansson, Sam Rockwell, Mickey
          Rourke, and Samuel L. Jackson. Six months after Iron Man, Tony Stark resists calls from
          the United States government to hand over the Iron Man technology, which is causing his
          declining health. Meanwhile, Russian scientist Ivan Vanko (Rourke) uses his own version of
          the technology to pursue a vendetta against the Stark family.
        </p>
        <p>
          Following the critical and commercial success of Iron Man in May 2008, Marvel Studios
          announced and immediately set to work on producing a sequel. In July, Theroux was hired to
          write the script and Favreau was signed to return as director. Downey, Paltrow, and
          Jackson were set to reprise their roles from Iron Man, while Cheadle was brought in to
          replace Terrence Howard in the role of James Rhodes. In the early months of 2009, Rourke
          (Vanko), Rockwell, and Johansson filled out the supporting cast. Filming took place from
          April to July 2009, mostly in California as in the first film, except for a key sequence
          in Monaco. Unlike its predecessor, which mixed digital and practical effects, the sequel
          primarily relied on computer-generated imagery to create the Iron Man suits.
        </p>
        <p>
          Iron Man 2 premiered at the El Capitan Theatre on April 26, 2010, and was released in the
          United States on May 7, as part of Phase One of the MCU. The film received generally
          positive reviews from critics with praise for its action sequences and performances,
          although they deemed it to be inferior to the first film. The sequel grossed over $623.9
          million at the worldwide box office, making it the seventh-highest-grossing film of 2010.
          It received an Academy Award nomination for Best Visual Effects. A sequel, Iron Man 3, was
          released on May 3, 2013.
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
