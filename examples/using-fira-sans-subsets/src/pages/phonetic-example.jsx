import React from "react";

export default () => (
  <>
    <main>
      <h1>Phonetic example</h1>
      <p>
        <a href="https://en.wikipedia.org/wiki/Help:IPA">
          https://en.wikipedia.org/wiki/Help:IPA
        </a>
      </p>
      <ul>
        <li>
          <strong>Headings + Body:</strong> FiraSans-Bold-latin.woff2{" "}
          <span className="small-caps">30.2KB</span>
        </li>
        <li>
          <strong>Body:</strong> FiraSans-Regular-greek.woff2{" "}
          <span className="small-caps">16.1KB</span>
        </li>
        <li>
          <strong>Body:</strong> FiraSans-Regular-phonetic.woff2{" "}
          <span className="small-caps">17.4KB</span>
        </li>
        <li>
          <strong>Body:</strong> FiraSans-Regular-latin.woff2{" "}
          <span className="small-caps">28.7KB</span>
        </li>
        <li>
          <strong>Body:</strong> FiraSans-Regular-rest.woff2{" "}
          <span className="small-caps">18.5KB</span>
        </li>
      </ul>
      <p>
        The total size is <span className="small-caps">110.9KB</span>
      </p>
      <h2>Brackets</h2>
      <p>
        Two types of brackets are commonly used to enclose transcriptions in the
        <abbr>IPA</abbr>:
      </p>
      <ul>
        <li>
          /Slashes/ indicate sounds that are distinguished as the basic units of
          words in a language by native speakers; these are called phonemes.
          Changing the symbols between these slashes would either change the
          identity of the word or produce nonsense. For example, since there is
          no meaningful difference to a native speaker between the two sounds
          written with the letter L in the word lulls, they are considered the
          same phoneme, and so, using slashes, they are given the same symbol in
          IPA: /ˈlʌlz/. Similarly, Spanish la bamba is transcribed phonemically
          with two instances of the same b sound, /la ˈbamba/, despite the fact
          that they sound different to a speaker of English. Thus a reader who
          is not familiar with the language in question might not know how to
          interpret these transcriptions more narrowly.
        </li>
        <li>
          [Square brackets] indicate the narrower or more detailed phonetic
          qualities of a pronunciation, not taking into account the norms of the
          language to which it belongs; therefore, such transcriptions do not
          regard whether subtly different sounds in the pronunciation are
          actually noticeable or distinguishable to a native speaker of the
          language. Within square brackets is what a foreigner who does not know
          the structure of a language might hear as discrete units of sound. For
          instance, the English word lulls may be pronounced in a particular
          dialect more specifically as [ˈlɐɫz], with different letter L sounds
          at the beginning and end. This may be obvious to speakers of languages
          that differentiate between the sounds [l] and [ɫ]. Likewise, Spanish
          la bamba (pronounced without a pause) has two different b-sounds to
          the ears of foreigners or linguists—[la ˈβamba]—though a native
          Spanish speaker might not be able to hear it. Omitting or adding such
          detail does not make a difference to the identity of the word, but
          helps to give a more precise pronunciation.
        </li>
      </ul>
      <p>A third kind of bracket is occasionally seen:</p>
      <ul>
        <li>
          Either //double slashes// or |pipes| (or occasionally other
          conventions) show that the enclosed sounds are theoretical constructs
          that are not actually heard. (This is part of morphophonology.) For
          instance, most phonologists argue that the -s at the ends of verbs,
          which surfaces as either /s/ in talks /tɔːks/ or as /z/ in lulls
          /lʌlz/, has a single underlying form. If they decide this form is an
          s, they would write it //s// (or |s|) to claim that phonemic /tɔːks/
          and /lʌlz/ are essentially //tɔːks// and //lʌls// underneath. If they
          were to decide it was essentially the latter, //z//, they would
          transcribe these words //tɔːkz// and //lʌlz//.
        </li>
      </ul>
    </main>
  </>
);
