/* =========================================================
   MOTEUR DES QUIZ
   Le coin français
   ========================================================= */


/* QUESTIONS DU QUIZ EN COURS */

let questionsQuiz = [];
let questionActuelle = 0;
let scoreQuiz = 0;
let quizRepondu = false;
let typeQuizActuel = "";


/* =========================================================
   MÉLANGER UN TABLEAU
   ========================================================= */

function melangerQuiz(tableau) {

  const copie = [...tableau];

  for (let i = copie.length - 1; i > 0; i--) {

    const j = Math.floor(Math.random() * (i + 1));

    [copie[i], copie[j]] = [copie[j], copie[i]];
  }

  return copie;
}


/* =========================================================
   DÉMARRER UN QUIZ
   ========================================================= */

function demarrerQuiz(type) {

  typeQuizActuel = type;

  /* GRAMMAIRE */

  if (type === "grammaire") {

    questionsQuiz = melangerQuiz(
      quizUnite1.grammaire
    );

  }

  /* VOCABULAIRE */

  else if (type === "vocabulaire") {

    questionsQuiz = melangerQuiz(
      quizUnite1.vocabulaire
    );

  }

  /* QUIZ MIXTE */

  else if (type === "mixte") {

    const toutesLesQuestions = [
      ...quizUnite1.grammaire,
      ...quizUnite1.vocabulaire
    ];

    questionsQuiz = melangerQuiz(
      toutesLesQuestions
    );

  }


  questionActuelle = 0;
  scoreQuiz = 0;
  quizRepondu = false;


  document
    .getElementById("quiz-menu")
    .classList.add("quiz-cache");


  document
    .getElementById("quiz-resultat")
    .classList.add("quiz-cache");


  document
    .getElementById("quiz-jeu")
    .classList.remove("quiz-cache");


  afficherQuestionQuiz();
}


/* =========================================================
   AFFICHER UNE QUESTION
   ========================================================= */

function afficherQuestionQuiz() {

  quizRepondu = false;

  const question = questionsQuiz[questionActuelle];


  /* PROGRESSION */

  document
    .getElementById("quiz-progression")
    .textContent =
      "Question " +
      (questionActuelle + 1) +
      " / " +
      questionsQuiz.length;


  /* SCORE */

  document
    .getElementById("quiz-score")
    .textContent =
      "Score : " + scoreQuiz;


  /* BARRE DE PROGRESSION */

  const progression =
    ((questionActuelle + 1) /
      questionsQuiz.length) * 100;


  document
    .getElementById("quiz-barre-progression")
    .style.width =
      progression + "%";


  /* QUESTION */

  document
    .getElementById("quiz-question")
    .textContent =
      question.question;


  /* ZONE DES RÉPONSES */

  const zoneReponses =
    document.getElementById("quiz-reponses");


  zoneReponses.innerHTML = "";


  /* EFFACER LE FEEDBACK PRÉCÉDENT */

  document
    .getElementById("quiz-feedback")
    .innerHTML = "";


  /* CACHER LE BOUTON SUIVANT */

  document
    .getElementById("quiz-suivant")
    .classList.add("quiz-cache");


  /* MÉLANGER LES CHOIX */

  const choixMelanges =
    melangerQuiz(question.choix);


  /* CRÉER LES BOUTONS DE RÉPONSE */

  choixMelanges.forEach((reponse) => {

    const bouton =
      document.createElement("button");


    bouton.type = "button";

    bouton.className =
      "quiz-reponse";

    bouton.textContent =
      reponse;


    bouton.onclick = function () {

      verifierReponseQuiz(
        reponse,
        bouton
      );

    };


    zoneReponses.appendChild(
      bouton
    );

  });

}


/* =========================================================
   VÉRIFIER LA RÉPONSE
   ========================================================= */

function verifierReponseQuiz(
  reponseChoisie,
  boutonChoisi
) {

  /* EMPÊCHER DE RÉPONDRE DEUX FOIS */

  if (quizRepondu) {
    return;
  }


  quizRepondu = true;


  const question =
    questionsQuiz[questionActuelle];


  const boutons =
    document.querySelectorAll(
      "#quiz-reponses .quiz-reponse"
    );


  /* BLOQUER LES BOUTONS APRÈS LA RÉPONSE */

  boutons.forEach((bouton) => {

    bouton.disabled = true;


    /* AFFICHER LA BONNE RÉPONSE */

    if (
      bouton.textContent ===
      question.bonne
    ) {

      bouton.classList.add(
        "correct"
      );

    }

  });


  /* =======================================================
     BONNE RÉPONSE
     ======================================================= */

  if (
    reponseChoisie ===
    question.bonne
  ) {

    scoreQuiz++;


    boutonChoisi.classList.add(
      "correct"
    );


    document
      .getElementById("quiz-feedback")
      .innerHTML = `

        <div class="feedback-correct">

          ✓ Bonne réponse !

          <span class="explication-quiz">
            ${question.explication}
          </span>

        </div>

      `;

  }


  /* =======================================================
     MAUVAISE RÉPONSE
     ======================================================= */

  else {

    boutonChoisi.classList.add(
      "incorrect"
    );


    document
      .getElementById("quiz-feedback")
      .innerHTML = `

        <div class="feedback-incorrect">

          ✗ Pas tout à fait.

          <span class="explication-quiz">

            <strong>
              Bonne réponse :
            </strong>

            ${question.bonne}

            <br>

            ${question.explication}

          </span>

        </div>

      `;

  }


  /* ACTUALISER LE SCORE */

  document
    .getElementById("quiz-score")
    .textContent =
      "Score : " + scoreQuiz;


  /* BOUTON QUESTION SUIVANTE */

  const boutonSuivant =
    document.getElementById("quiz-suivant");


  if (
    questionActuelle ===
    questionsQuiz.length - 1
  ) {

    boutonSuivant.textContent =
      "Voir mon résultat →";

  }

  else {

    boutonSuivant.textContent =
      "Question suivante →";

  }


  boutonSuivant.classList.remove(
    "quiz-cache"
  );

}


/* =========================================================
   QUESTION SUIVANTE
   ========================================================= */

function questionSuivante() {

  if (!quizRepondu) {
    return;
  }


  questionActuelle++;


  if (
    questionActuelle >=
    questionsQuiz.length
  ) {

    afficherResultatQuiz();

    return;
  }


  afficherQuestionQuiz();

}


/* =========================================================
   AFFICHER LE RÉSULTAT FINAL
   ========================================================= */

function afficherResultatQuiz() {

  document
    .getElementById("quiz-jeu")
    .classList.add("quiz-cache");


  const resultat =
    document.getElementById("quiz-resultat");


  resultat.classList.remove(
    "quiz-cache"
  );


  const pourcentage =
    Math.round(
      (scoreQuiz /
        questionsQuiz.length)
      * 100
    );


  let message = "";


  /* 90 À 100 % */

  if (pourcentage >= 90) {

    message =
      "Excellent travail ! Vous maîtrisez très bien cette partie de l'Unité 1. 🎉";

  }


  /* 75 À 89 % */

  else if (pourcentage >= 75) {

    message =
      "Très bon travail ! Quelques petites révisions et ce sera parfait.";

  }


  /* 60 À 74 % */

  else if (pourcentage >= 60) {

    message =
      "Bon travail ! Revoyez les points qui vous ont posé problème puis essayez encore une fois.";

  }


  /* MOINS DE 60 % */

  else {

    message =
      "Continuez ! Relisez vos notes de l'Unité 1 puis recommencez le quiz.";

  }


  resultat.innerHTML = `

    <h2>
      Résultat
    </h2>


    <div class="quiz-note">

      ${scoreQuiz}
      /
      ${questionsQuiz.length}

    </div>


    <div class="quiz-pourcentage">

      ${pourcentage} %

    </div>


    <p>
      ${message}
    </p>


    <button
      type="button"
      class="quiz-recommencer"
      onclick="recommencerQuiz()">

      Recommencer le quiz

    </button>


    <button
      type="button"
      class="quiz-retour-menu"
      onclick="retourMenuQuiz()">

      Grammaire / Vocabulaire / Mixte

    </button>

  `;

}


/* =========================================================
   RECOMMENCER LE MÊME QUIZ
   ========================================================= */

function recommencerQuiz() {

  demarrerQuiz(
    typeQuizActuel
  );

}


/* =========================================================
   RETOUR AU MENU
   ========================================================= */

function retourMenuQuiz() {

  document
    .getElementById("quiz-resultat")
    .classList.add("quiz-cache");


  document
    .getElementById("quiz-jeu")
    .classList.add("quiz-cache");


  document
    .getElementById("quiz-menu")
    .classList.remove("quiz-cache");

}
