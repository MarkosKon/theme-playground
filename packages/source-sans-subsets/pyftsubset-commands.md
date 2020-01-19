# Sub-setting Source Pro typeface

- Using [version 3.006](https://github.com/adobe-fonts/source-sans-pro/releases/tag/3.006R) for Source Sans, not the version from Google Fonts (_1.076_) because it doesn't support Greek italic. On the other hand, version 3.006 doesn't support hinting.
  - https://github.com/adobe-fonts/source-sans-pro/releases/tag/3.006R
  - https://github.com/google/fonts/issues/1744
- You can append `--verbose` to output extra details in the console.
- Append `--no-hinting --desubroutinize` to remove hinting.
- Substitute _woff2_ with _woff_ to create `woff` files.
- To create the latin subsets from Google fonts, you need the following unicode range: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`. For an example command, see section _1. Source Sans Prop Regular._
- TODO: Create a more reasonable latin subset (with punctuation like _em dashes_) instead of downloading latin _and_ rest?

## 1. Source Sans Pro Regular

According to https://wakamaifondue.com/, this font supports 52 layout features.

### Required (4):

ccmp, mark, mkmk, locl.

### The rest (48):

aalt, c2sc, case, cv01, cv02, cv03, cv04, cv05, cv06, cv07, cv08, cv09, cv10, cv11, cv12, cv13, cv14, cv15, cv16, cv17, cv18, cv19, dnom, frac, liga, numr, onum, ordn, pnum, salt, sinf, smcp, ss01, ss02, ss03, ss04, ss05, ss06, ss07, ss08, ss09, ss10, subs, sups, titl, zero, kern, size.

- SourceSansPro-Regular-all.woff2 (79.7KB):
  `pyftsubset SourceSansPro-Regular.ttf --output-file="SourceSansPro-Regular-all.woff2" --flavor=woff2 --layout-features=* --unicodes=*`
- SourceSansPro-Regular-latin.woff2 (21.4KB):
  `pyftsubset SourceSansPro-Regular.ttf --output-file="SourceSansPro-Regular-latin.woff2" --flavor=woff2 --layout-features=* --unicodes=U+0000-00FF`
- SourceSansPro-Regular-latin-google-fonts.woff2 (23.4KB)
  `pyftsubset SourceSansPro-Regular.ttf --output-file="SourceSansPro-Regular-latin-google-fonts.woff2" --flavor=woff2 --unicodes=U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD --layout-features=* --verbose`
- SourceSansPro-Regular-latin-specific-layout-features.woff2 (20.3KB, small difference):
  `pyftsubset SourceSansPro-Regular.ttf --output-file="SourceSansPro-Regular-latin-specific-layout-features.woff2" --flavor=woff2 --layout-features=ccmp,locl,mark,mkmk,salt,frac,onum,ordn,pnum,zero,smcp,liga,c2sc,subs,sups,kern --unicodes=U+0000-00FF`
- SourceSansPro-Regular-greek.woff2 (9KB):
  `pyftsubset SourceSansPro-Regular.ttf --output-file="SourceSansPro-Regular-greek.woff2" --flavor=woff2 --layout-features=* --unicodes=U+0370-03FF`
- SourceSansPro-Regular-greek-extended.woff2 (5.8KB):
  `pyftsubset SourceSansPro-Regular.ttf --output-file="SourceSansPro-Regular-greek-extended.woff2" --flavor=woff2 --layout-features=* --unicodes=U+1F00-1FFF`
- SourceSansPro-Regular-combining-diacritical-marks.woff2 (4.8KB):
  `pyftsubset SourceSansPro-Regular.ttf --output-file="SourceSansPro-Regular-combining-diacritical-marks.woff2" --flavor=woff2 --layout-features=* --unicodes=U+0300-036F`
- SourceSansPro-Regular-phonetic.woff2 (8.8KB):
  `pyftsubset SourceSansPro-Regular.ttf --output-file="SourceSansPro-Regular-phonetic.woff2" --flavor=woff2 --layout-features=* --unicodes=U+0250-02FF`
- SourceSansPro-Regular-rest.woff2 (12.2KB):
  `pyftsubset SourceSansPro-Regular.ttf --output-file="SourceSansPro-Regular-rest.woff2" --flavor=woff2 --layout-features=* --unicodes=U+2000-1F916`

What we'll actually use from the above, ordered by expected frequency:

- Latin: SourceSansPro-Regular-latin.woff2 (21.4KB).
- Rest: SourceSansPro-Regular-rest.woff2 (12.2KB).
- Greek: SourceSansPro-Regular-greek.woff2 (9KB).
- Combining diacritical marks: SourceSansPro-Regular-combining-diacritical-marks.woff2 (4.8KB).
- Greek extended: SourceSansPro-Regular-greek-extended.woff2 (6.6KB).
- Phonetic: SourceSansPro-Regular-phonetic.woff2 (8.8KB).

In most of the pages the size for Regular would be _latin_ + _rest_ = 33.6KB or just _latin_ = 21.4KB.

<strong>Warning:</strong> If we are typesetting a piece of fancy Greek text, the font size can easily go near the max with this method. All the subsets combined have a size of 62.8KB—which is still smaller than the 79.7KB of the original.

## 2. Source Sans Pro Italic

According to https://wakamaifondue.com/, this font supports the following layout features:

## Required (4)

ccmp, locl, mark, mkmk.

## The rest (46) :

Compared to Regular, the italic version doesn't support _c2sc_.

aalt, case, cv01, cv02, cv03, cv04, cv05, cv06, cv07, cv08, cv09, cv10, cv11, cv12, cv13, cv14, cv15, cv16, cv17, cv18, cv19, dnom, frac, liga, numr, onum, ordn, pnum, salt, sinf, ss01, ss02, ss03, ss04, ss05, ss06, ss07, ss08, ss09, ss10, subs, sups, titl, zero, kern, size.

You do the same as with Regular but you change the names from _Regular_ to _Italic_.

- SourceSansPro-It-all.woff2 (64.3KB):
  `pyftsubset.exe SourceSansPro-It.ttf --output-file="SourceSansPro-It-all.woff2" --flavor=woff2 --layout-features=* --unicodes=*`
- SourceSansPro-It-latin.woff2 (17.4KB):
  `pyftsubset SourceSansPro-It.ttf --output-file="SourceSansPro-It-latin.woff2" --flavor=woff2 --layout-features=* --unicodes=U+0000-00FF`
- SourceSansPro-It-greek.woff2 (7.4KB):
  `pyftsubset SourceSansPro-It.ttf --output-file="SourceSansPro-It-greek.woff2" --flavor=woff2 --layout-features=* --unicodes=U+0370-03FF`
- SourceSansPro-It-greek-extended.woff2 (5.8KB):
  `pyftsubset SourceSansPro-It.ttf --output-file="SourceSansPro-It-greek-extended.woff2" --flavor=woff2 --layout-features=* --unicodes=U+1F00-1FFF`
- SourceSansPro-It-combining-diacritical-marks.woff2 (4.8KB):
  `pyftsubset SourceSansPro-It.ttf --output-file="SourceSansPro-It-combining-diacritical-marks.woff2" --flavor=woff2 --layout-features=* --unicodes=U+0300-036F`
- SourceSansPro-It-phonetic.woff2 (8.1KB):
  `pyftsubset SourceSansPro-It.ttf --output-file="SourceSansPro-It-phonetic.woff2" --flavor=woff2 --layout-features=* --unicodes=U+0250-02FF`
- SourceSansPro-It-rest.woff2 (12KB):
  `pyftsubset SourceSansPro-It.ttf --output-file="SourceSansPro-It-rest.woff2" --flavor=woff2 --layout-features=* --unicodes=U+2000-1F916`

## 3. Source Sans Pro Bold

According to https://wakamaifondue.com/, this font supports the following layout features:

## Required (4)

ccmp, locl, mark, mkmk.

## The rest (48) :

aalt, c2sc, case, cv01, cv02, cv03, cv04, cv05, cv06, cv07, cv08, cv09, cv10, cv11, cv12, cv13, cv14, cv15, cv16, cv17, cv18, cv19, dnom, frac, liga, numr, onum, ordn, pnum, salt, sinf, smcp, ss01, ss02, ss03, ss04, ss05, ss06, ss07, ss08, ss09, ss10, subs, sups, titl, zero, kern, size.

You do the same as with Regular but you change the names from _Regular_ to _Bold_.

- SourceSansPro-Bold-all.woff2 (79KB):
  `pyftsubset.exe SourceSansPro-Bold.ttf --output-file="SourceSansPro-Bold-all.woff2" --flavor=woff2 --layout-features=* --unicodes=*`
- SourceSansPro-Bold-latin.woff2 (21.4KB):
  `pyftsubset SourceSansPro-Bold.ttf --output-file="SourceSansPro-Bold-latin.woff2" --flavor=woff2 --layout-features=* --unicodes=U+0000-00FF`
- SourceSansPro-Bold-greek.woff2 (8.9KB):
  `pyftsubset SourceSansPro-Bold.ttf --output-file="SourceSansPro-Bold-greek.woff2" --flavor=woff2 --layout-features=* --unicodes=U+0370-03FF`
- SourceSansPro-Bold-greek-extended.woff2 (6.6KB):
  `pyftsubset SourceSansPro-Bold.ttf --output-file="SourceSansPro-Bold-greek-extended.woff2" --flavor=woff2 --layout-features=* --unicodes=U+1F00-1FFF`
- SourceSansPro-Bold-combining-diacritical-marks.woff2 (4.9KB):
  `pyftsubset SourceSansPro-Bold.ttf --output-file="SourceSansPro-Bold-combining-diacritical-marks.woff2" --flavor=woff2 --layout-features=* --unicodes=U+0300-036F`
- SourceSansPro-Bold-phonetic.woff2 (8.8KB):
  `pyftsubset SourceSansPro-Bold.ttf --output-file="SourceSansPro-Bold-phonetic.woff2" --flavor=woff2 --layout-features=* --unicodes=U+0250-02FF`
- SourceSansPro-Bold-rest.woff2 (12.2KB):
  `pyftsubset SourceSansPro-Bold.ttf --output-file="SourceSansPro-Bold-rest.woff2" --flavor=woff2 --layout-features=* --unicodes=U+2000-1F916`

## 4. Source Sans Pro Bolditalic

According to https://wakamaifondue.com/, this font supports the following layout features:

## Required (4)

ccmp, locl, mark, mkmk.

## The rest (46) :

Compared to Regular, the BoldItalic version doesn't support _c2sc_.

aalt, case, cv01, cv02, cv03, cv04, cv05, cv06, cv07, cv08, cv09, cv10, cv11, cv12, cv13, cv14, cv15, cv16, cv17, cv18, cv19, dnom, frac, liga, numr, onum, ordn, pnum, salt, sinf, ss01, ss02, ss03, ss04, ss05, ss06, ss07, ss08, ss09, ss10, subs, sups, titl, zero, kern, size.

You do the same as with Regular but you change the names from _Regular_ to _Bolditalic_.

- SourceSansPro-BoldIt-all.woff2 (63.7KB):
  `pyftsubset.exe SourceSansPro-BoldIt.ttf --output-file="SourceSansPro-BoldIt-all.woff2" --flavor=woff2 --layout-features=* --unicodes=*`
- SourceSansPro-BoldIt-latin.woff2 (17.3KB):
  `pyftsubset SourceSansPro-BoldIt.ttf --output-file="SourceSansPro-BoldIt-latin.woff2" --flavor=woff2 --layout-features=* --unicodes=U+0000-00FF`
- SourceSansPro-BoldIt-greek.woff2 (7.4KB):
  `pyftsubset SourceSansPro-BoldIt.ttf --output-file="SourceSansPro-BoldIt-greek.woff2" --flavor=woff2 --layout-features=* --unicodes=U+0370-03FF`
- SourceSansPro-BoldIt-greek-extended.woff2 (5.7KB):
  `pyftsubset SourceSansPro-BoldIt.ttf --output-file="SourceSansPro-BoldIt-greek-extended.woff2" --flavor=woff2 --layout-features=* --unicodes=U+1F00-1FFF`
- SourceSansPro-BoldIt-combining-diacritical-marks.woff2 (5KB):
  `pyftsubset SourceSansPro-BoldIt.ttf --output-file="SourceSansPro-BoldIt-combining-diacritical-marks.woff2" --flavor=woff2 --layout-features=* --unicodes=U+0300-036F`
- SourceSansPro-BoldIt-phonetic.woff2 (8.1KB):
  `pyftsubset SourceSansPro-BoldIt.ttf --output-file="SourceSansPro-BoldIt-phonetic.woff2" --flavor=woff2 --layout-features=* --unicodes=U+0250-02FF`
- SourceSansPro-BoldIt-rest.woff2 (12.1KB):
  `pyftsubset SourceSansPro-BoldIt.ttf --output-file="SourceSansPro-BoldIt-rest.woff2" --flavor=woff2 --layout-features=* --unicodes=U+2000-1F916`

## 5. Source Sans Variable Roman

According to https://wakamaifondue.com/, this font supports 52 layout features.

### Required (4):

ccmp, mark, mkmk, locl.

### The rest (48):

aalt, c2sc, case, cv01, cv02, cv03, cv04, cv05, cv06, cv07, cv08, cv09, cv10, cv11, cv12, cv13, cv14, cv15, cv16, cv17, cv18, cv19, dnom, frac, liga, numr, onum, ordn, pnum, salt, sinf, smcp, ss01, ss02, ss03, ss04, ss05, ss06, ss07, ss08, ss09, ss10, subs, sups, titl, zero, kern, size.

It has 1 axis and 6 named instances:

- axis: `wght` (Weight)
- instances: ExtraLight (200), Light (300), Regular (400), SemiBold (600), Bold (700), and Black (900).

### pyftsubset commands

- SourceSansVariable-Roman-all.woff2 (133.6KB):
  `pyftsubset.exe SourceSansVariable-Roman.ttf --output-file="SourceSansVariable-Roman-all.woff2" --flavor=woff2 --layout-features=* --unicodes=*`
- SourceSansVariable-Roman-latin.woff2 (40KB):
  `pyftsubset SourceSansVariable-Roman.ttf --output-file="SourceSansVariable-Roman-latin.woff2" --flavor=woff2 --layout-features=* --unicodes=U+0000-00FF`
- SourceSansVariable-Roman-greek.woff2 (16.2KB):
  `pyftsubset SourceSansVariable-Roman.ttf --output-file="SourceSansVariable-Roman-greek.woff2" --flavor=woff2 --layout-features=* --unicodes=U+0370-03FF`
- SourceSansVariable-Roman-greek-extended.woff2 (10.7KB):
  `pyftsubset SourceSansVariable-Roman.ttf --output-file="SourceSansVariable-Roman-greek-extended.woff2" --flavor=woff2 --layout-features=* --unicodes=U+1F00-1FFF`
- SourceSansVariable-Roman-combining-diacritical-marks.woff2 (7.9KB):
  `pyftsubset SourceSansVariable-Roman.ttf --output-file="SourceSansVariable-Roman-combining-diacritical-marks.woff2" --flavor=woff2 --layout-features=* --unicodes=U+0300-036F`
- SourceSansVariable-Roman-phonetic.woff2 (16.9KB):
  `pyftsubset SourceSansVariable-Roman.ttf --output-file="SourceSansVariable-Roman-phonetic.woff2" --flavor=woff2 --layout-features=* --unicodes=U+0250-02FF`
- SourceSansVariable-Roman-rest.woff2 (22KB):
  `pyftsubset SourceSansVariable-Roman.ttf --output-file="SourceSansVariable-Roman-rest.woff2" --flavor=woff2 --layout-features=* --unicodes=U+2000-1F916`

## 6. Source Sans Variable Italic

According to https://wakamaifondue.com/ it has 1431 characters. It also has 1 axis and 6 named instances. Finally, it has 50 layout features.

### Required (4):

ccmp, mark, mkmk, locl.

### The rest (46):

aalt, case, cv01, cv02, cv03, cv04, cv05, cv06, cv07, cv08, cv09, cv10, cv11, cv12, cv13, cv14, cv15, cv16, cv17, cv18, cv19, dnom, frac, liga, numr, onum, ordn, pnum, salt, sinf, ss01, ss02, ss03, ss04, ss05, ss06, ss07, ss08, ss09, ss10, subs, sups, titl, zero, kern, size.

It has 1 axis and 6 named instances:

- axis: `wght` (Weight)
- instances: ExtraLight Italic (200), Light Italic (300), Regular Italic (400), SemiBold Italic (600), Bold Italic (700), and Black Italic (900).

### pyftsubset commands

- SourceSansVariable-Italic-all.woff2 (109.2KB):
  `pyftsubset.exe SourceSansVariable-Italic.ttf --output-file="SourceSansVariable-Italic-all.woff2" --flavor=woff2 --layout-features=* --unicodes=*`
- SourceSansVariable-Italic-latin.woff2 (32.2KB):
  `pyftsubset SourceSansVariable-Italic.ttf --output-file="SourceSansVariable-Italic-latin.woff2" --flavor=woff2 --layout-features=* --unicodes=U+0000-00FF`
- SourceSansVariable-Italic-greek.woff2 (13.2KB):
  `pyftsubset SourceSansVariable-Italic.ttf --output-file="SourceSansVariable-Italic-greek.woff2" --flavor=woff2 --layout-features=* --unicodes=U+0370-03FF`
- SourceSansVariable-Italic-greek-extended.woff2 (9.5KB):
  `pyftsubset SourceSansVariable-Italic.ttf --output-file="SourceSansVariable-Italic-greek-extended.woff2" --flavor=woff2 --layout-features=* --unicodes=U+1F00-1FFF`
- SourceSansVariable-Italic-combining-diacritical-marks.woff2 (8.1KB):
  `pyftsubset SourceSansVariable-Italic.ttf --output-file="SourceSansVariable-Italic-combining-diacritical-marks.woff2" --flavor=woff2 --layout-features=* --unicodes=U+0300-036F`
- SourceSansVariable-Italic-phonetic.woff2 (16.2KB):
  `pyftsubset SourceSansVariable-Italic.ttf --output-file="SourceSansVariable-Italic-phonetic.woff2" --flavor=woff2 --layout-features=* --unicodes=U+0250-02FF`
- SourceSansVariable-Italic-rest.woff2 (22.6KB):
  `pyftsubset SourceSansVariable-Italic.ttf --output-file="SourceSansVariable-Italic-rest.woff2" --flavor=woff2 --layout-features=* --unicodes=U+2000-1F916`
