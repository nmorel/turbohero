import {heroes} from './heroes'

export function Page() {
  return (
    <article>
      <header>
        <h1>Iron Man (2008)</h1>
      </header>
      <section>
        <a
          href="https://en.wikipedia.org/wiki/Iron_Man_(2008_film)"
          target="_blank"
          rel="noopeneer noreferrer"
        >
          <img src="https://upload.wikimedia.org/wikipedia/en/0/02/Iron_Man_%282008_film%29_poster.jpg" />
        </a>
      </section>
      <section>
        <p>
          Iron Man is a 2008 American superhero film based on the Marvel Comics character of the
          same name. Produced by Marvel Studios and distributed by Paramount Pictures, it is the
          first film in the Marvel Cinematic Universe (MCU). Directed by Jon Favreau from a
          screenplay by the writing teams of Mark Fergus and Hawk Ostby, and Art Marcum and Matt
          Holloway, the film stars Robert Downey Jr. as Tony Stark / Iron Man alongside Terrence
          Howard, Jeff Bridges, Shaun Toub, and Gwyneth Paltrow. In the film, following his escape
          from captivity by a terrorist group, world famous industrialist and master engineer Tony
          Stark builds a mechanized suit of armor and becomes the superhero Iron Man.
        </p>
        <p>
          A film featuring the character was in development at Universal Pictures, 20th Century Fox,
          and New Line Cinema at various times since 1990, before Marvel Studios reacquired the
          rights in 2005. Marvel put the project in production as its first self-financed film, with
          Paramount Pictures distributing. Favreau signed on as director in April 2006, and faced
          opposition from Marvel when trying to cast Downey in the title role; the actor was signed
          in September. Filming took place from March to June 2007, primarily in California to
          differentiate the film from numerous other superhero stories that are set in New York
          City-esque environments. During filming, the actors were free to create their own dialogue
          because pre-production was focused on the story and action. Rubber and metal versions of
          the armor, created by Stan Winston&apos;s company, were mixed with computer-generated
          imagery to create the title character.
        </p>
        <p>
          Iron Man premiered in Sydney on April 14, 2008, and was released in the United States on
          May 2, as the first film in Phase One of the MCU. It grossed over $585 million, becoming
          the eighth-highest grossing film of 2008. The film received praise from critics,
          especially for Downey&apos;s performance, as well as Favreau&apos;s direction, visual
          effects, action scenes, and writing. It was selected by the American Film Institute as one
          of the ten best films of 2008 and received two nominations at the 81st Academy Awards for
          Best Sound Editing and Best Visual Effects. Two sequels have been released: Iron Man 2
          (2010) and Iron Man 3 (2013).
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
