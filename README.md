Projekt można uruchomić za pomocą komendy "npm run start", po wcześniejszym użyciu 'npm install'.

Po rozpoczęciu pracy największym problemem była moja niewielka znajomość biblioteki @react-three/fiber. Dlatego pierwszą rzeczą, jaką zrobiłem, było otworzenie dokumentacji i zapoznanie się z nią, a następnie obejrzenie poradników oraz wykonanie kilku podstawowych zadań, które pomogły mi się wdrożyć w tę bibliotekę.

Za pomocą funkcji useFrame() mogłem w łatwy sposób ustawić animację dla obiektów. Wywołuje ona automatycznie daną funkcję w każdej klatce renderowania.

Rozdzieliłem kod odpowiedzialny za poruszanie się piłek i kolizję między nimi, aby kod był bardziej przejrzysty i łatwiejszy do utrzymania.

Jednym z problemów był start aplikacji, gdzie piłki renderowały się w jednym miejscu. Kolizja między nimi powodowała, że zacinały się one w sobie. Dlatego opóźniłem działanie kodu odpowiedzialnego za kolizję, do momentu rozsypania się kulek, za pomocą funkcji setTimeout().

Chciałem też odwzorować grawitację oddziaływającą na piłki. Szukałem sposobu, używając biblioteki @react-three/cannon, jednak efekt, który udało mi się osiągnąć, nie był zadowalający, więc na chwilę obecną postanowiłem obejść się bez tego.
Podobną sytuacją okazało się umieszczenie piłek w okręgu. Miałem problemy z dokładnym odczytaniem pozycji boków, dlatego postanowiłem użyć do tego 4 ścian.

Niestety zauważyłem, że podczas niektórych odbić od siebie, piłki wybijają się za ścianę i po chwili wracają do środka. Jednego razu w ogóle nie ma to miejsca, a raz jest kilka przypadków z rzędu.
