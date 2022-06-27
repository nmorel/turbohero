import {heroes} from './heroes'

export function Page() {
  return (
    <article>
      <header>
        <h1>The Incredible Hulk (2008)</h1>
      </header>
      <section>
        <a
          href="https://en.wikipedia.org/wiki/The_Incredible_Hulk_(film)"
          target="_blank"
          rel="noopeneer noreferrer"
        >
          <img src="https://upload.wikimedia.org/wikipedia/en/f/f0/The_Incredible_Hulk_%28film%29_poster.jpg" />
        </a>
      </section>
      <section>
        <p>
          The Incredible Hulk is a 2008 American superhero film based on the Marvel Comics character
          the Hulk. Produced by Marvel Studios and distributed by Universal Pictures, it is the
          second film in the Marvel Cinematic Universe (MCU). It was directed by Louis Leterrier
          from a screenplay by Zak Penn, and stars Edward Norton as Bruce Banner alongside Liv
          Tyler, Tim Roth, Tim Blake Nelson, Ty Burrell, and William Hurt. In the film, Bruce Banner
          becomes the Hulk as an unwitting pawn in a military scheme to reinvigorate the
          &quot;Super-Soldier&quot; program through gamma radiation. Banner goes on the run from the
          military while attempting to cure himself of the Hulk.
        </p>
        <p>
          After the mixed reception to Universal&apos;s 2003 film Hulk, Marvel Studios reacquired
          the rights to the character though Universal retained distribution rights. Leterrier, who
          had expressed interest in directing Iron Man for Marvel, was brought onboard and Penn
          began work on a script that would be much closer to the comics and the 1978 television
          series of the same name. In April 2007, Norton was hired to portray Banner and to rewrite
          Penn&apos;s screenplay. His script positioned the film as a reboot of the series,
          distancing it from the 2003 film to give the new version its own identity. Norton was
          ultimately not credited for his writing. Filming took place from July to November 2007,
          primarily in Toronto, Canada, with additional filming in New York City and Rio de Janeiro.
          Over 700 visual effects shots were created in post-production using a combination of
          motion capture and computer-generated imagery to complete the film.
        </p>
        <p>
          The Incredible Hulk premiered at the Gibson Amphitheatre in Universal City, California, on
          June 8, 2008, and was released in the United States on June 13, as part of Phase One of
          the MCU. It received praise for its action sequences and was considered an improvement
          over the 2003 film, but it was criticized as generic and lacking in depth. The film
          grossed $264.8 million worldwide, making it the lowest-grossing film of the MCU. Norton
          disagreed with Marvel over the final edit of the film and was replaced in the role of
          Banner by Mark Ruffalo for future MCU content starting with The Avengers in 2012.
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
