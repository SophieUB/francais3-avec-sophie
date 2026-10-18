/* =========================================================
   QUIZ — UNITÉ 3 : « ÇA FAIT LE BUZZ ! »
   15 questions de grammaire + 15 questions de vocabulaire
   Niveau A2

   Pas de questions sur :
   - la formation des questions
   - les questions inversées
   ========================================================= */

const quizUnite3 = {

  /* =======================================================
     GRAMMAIRE ET CONJUGAISON
     ======================================================= */

  grammaire: [

    /* =====================================================
       LA COMPARAISON
       ===================================================== */

    {
      question: "Cette émission est ___ intéressante que l'autre.",
      choix: ["plus", "beaucoup", "très", "autant"],
      bonne: "plus",
      explication: "Avec un adjectif, on utilise « plus + adjectif + que » pour exprimer la supériorité."
    },

    {
      question: "Cette chaîne est ___ intéressante que l'autre : elles sont toutes les deux très intéressantes.",
      choix: ["aussi", "autant", "aussi de", "plus de"],
      bonne: "aussi",
      explication: "Avec un adjectif, on utilise « aussi + adjectif + que » pour exprimer l'égalité."
    },

    {
      question: "Cette émission a ___ spectateurs que l'autre : elles ont le même nombre de spectateurs.",
      choix: ["autant de", "aussi", "autant", "aussi de"],
      bonne: "autant de",
      explication: "Devant un nom, on utilise « autant de + nom + que » pour exprimer l'égalité."
    },

    {
      question: "Il y a ___ publicités sur ce site que sur l'autre.",
      choix: ["plus de", "plus", "aussi", "mieux"],
      bonne: "plus de",
      explication: "Devant un nom, on utilise « plus de + nom + que » pour exprimer la supériorité."
    },

    {
      question: "Ce journal est bon, mais celui-ci est encore ___.",
      choix: ["meilleur", "mieux", "plus bon", "bien"],
      bonne: "meilleur",
      explication: "Le comparatif de l'adjectif « bon » est « meilleur »."
    },

    {
      question: "Paul présente bien l'émission, mais Léa la présente encore ___.",
      choix: ["mieux", "meilleure", "plus bien", "bonne"],
      bonne: "mieux",
      explication: "Le comparatif de l'adverbe « bien » est « mieux »."
    },


    /* =====================================================
       L'IMPÉRATIF
       ===================================================== */

    {
      question: "Choisis la bonne forme à l'impératif : ___ sur le lien ! (cliquer — vous)",
      choix: ["Cliquez", "Cliquer", "Cliques", "Cliquons"],
      bonne: "Cliquez",
      explication: "À l'impératif avec « vous », le verbe « cliquer » devient « cliquez »."
    },

    {
      question: "Choisis la bonne forme à l'impératif : ___ cette émission ! (écouter — tu)",
      choix: ["Écoute", "Écoutes", "Écoutez", "Écoutons"],
      bonne: "Écoute",
      explication: "À l'impératif, les verbes en -er ne prennent généralement pas de -s à la forme « tu » : « écoute »."
    },

    {
      question: "Choisis la bonne forme à l'impératif : ___ cette information ! (partager — nous)",
      choix: ["Partageons", "Partagez", "Partage", "Partager"],
      bonne: "Partageons",
      explication: "À l'impératif avec « nous », « partager » devient « partageons »."
    },

    {
      question: "Choisis la phrase correcte à l'impératif négatif.",
      choix: [
        "Ne partagez pas vos informations personnelles !",
        "Ne partagez vos informations personnelles pas !",
        "Partagez ne pas vos informations personnelles !",
        "Ne pas partagez vos informations personnelles !"
      ],
      bonne: "Ne partagez pas vos informations personnelles !",
      explication: "À l'impératif négatif, « ne » et « pas » entourent le verbe : « Ne partagez pas… »"
    },


    /* =====================================================
       L'IMPÉRATIF ET LES PRONOMS
       ===================================================== */

    {
      question: "Remplace « cette émission » par un pronom : Regardez cette émission !",
      choix: ["Regardez-la !", "La regardez !", "Regardez-le !", "Regardez-lui !"],
      bonne: "Regardez-la !",
      explication: "À l'impératif affirmatif, le pronom se place après le verbe avec un trait d'union : « Regardez-la ! »"
    },

    {
      question: "Remplace « ce message » par un pronom : Lisez ce message !",
      choix: ["Lisez-le !", "Le lisez !", "Lisez-la !", "Lisez-lui !"],
      bonne: "Lisez-le !",
      explication: "« Ce message » est masculin singulier : on le remplace par « le ». À l'impératif affirmatif : « Lisez-le ! »"
    },

    {
      question: "Choisis la phrase correcte à l'impératif négatif.",
      choix: ["Ne le partagez pas !", "Ne partagez-le pas !", "Ne partagez pas-le !", "Le ne partagez pas !"],
      bonne: "Ne le partagez pas !",
      explication: "À l'impératif négatif, le pronom se place avant le verbe : « Ne le partagez pas ! »"
    },


    /* =====================================================
       LE VERBE RECEVOIR
       ===================================================== */

    {
      question: "Je ___ beaucoup de messages sur mon téléphone.",
      choix: ["reçois", "reçoit", "recevons", "recevez"],
      bonne: "reçois",
      explication: "Au présent, « recevoir » avec « je » se conjugue « je reçois »."
    },

    {
      question: "Ils ___ beaucoup de commentaires sur les réseaux sociaux.",
      choix: ["reçoivent", "recevez", "recevons", "reçoit"],
      bonne: "reçoivent",
      explication: "Au présent, « recevoir » avec « ils » se conjugue « ils reçoivent »."
    }

  ],


  /* =======================================================
     VOCABULAIRE
     ======================================================= */

  vocabulaire: [

    /* =====================================================
       MÉDIAS ET RÉSEAUX SOCIAUX
       ===================================================== */

    {
      question: "Comment dit-on « TV channel » en français ?",
      choix: ["Une chaîne de télévision", "Une station de radio", "Une chronique", "Une rumeur"],
      bonne: "Une chaîne de télévision",
      explication: "Une « chaîne de télévision » correspond à « TV channel »."
    },

    {
      question: "Comment dit-on « social network » en français ?",
      choix: ["Un réseau social", "Une chaîne", "Un tournage", "Un atelier"],
      bonne: "Un réseau social",
      explication: "Un « réseau social » est une plateforme permettant notamment de communiquer et de partager du contenu."
    },

    {
      question: "Qu'est-ce qu'une « rumeur » ?",
      choix: [
        "Une information non vérifiée qui circule",
        "Une émission de télévision",
        "Un abonnement à un journal",
        "Une station de radio"
      ],
      bonne: "Une information non vérifiée qui circule",
      explication: "Une rumeur est une information qui circule sans être nécessairement vérifiée."
    },

    {
      question: "Que signifie « diffuser » ?",
      choix: ["Broadcast / distribute", "Register", "Memorize", "Receive"],
      bonne: "Broadcast / distribute",
      explication: "« Diffuser » signifie transmettre ou rendre un contenu accessible à un public."
    },

    {
      question: "Que signifie « partager » sur les réseaux sociaux ?",
      choix: [
        "To share",
        "To register",
        "To receive",
        "To memorize"
      ],
      bonne: "To share",
      explication: "Sur les réseaux sociaux, « partager » signifie transmettre ou republier un contenu."
    },

    {
      question: "Que signifie « s'abonner à une chaîne » ?",
      choix: [
        "To subscribe to a channel",
        "To film a channel",
        "To receive a channel",
        "To create a channel"
      ],
      bonne: "To subscribe to a channel",
      explication: "« S'abonner à » signifie souscrire ou suivre régulièrement un service ou un contenu."
    },


    /* =====================================================
       ÉMISSION / TOURNAGE
       ===================================================== */

    {
      question: "Que signifie « un tournage » ?",
      choix: ["Filming / a shoot", "A rumour", "A subscription", "A slogan"],
      bonne: "Filming / a shoot",
      explication: "Un « tournage » est la période ou l'activité pendant laquelle on filme une production."
    },

    {
      question: "Que signifie « un personnage » ?",
      choix: ["A character", "A journalist", "A subscriber", "A viewer"],
      bonne: "A character",
      explication: "Un personnage est une personne représentée dans une histoire, un film ou une série."
    },

    {
      question: "Une histoire « touchante » est une histoire qui…",
      choix: [
        "provoque de l'émotion",
        "est toujours très drôle",
        "est impossible à comprendre",
        "ne parle que d'actualité"
      ],
      bonne: "provoque de l'émotion",
      explication: "« Touchant / touchante » décrit quelque chose qui provoque une émotion."
    },

    {
      question: "Que signifie « avec un ton léger » ?",
      choix: [
        "In a light-hearted tone",
        "In a very serious tone",
        "Without speaking",
        "In a foreign language"
      ],
      bonne: "In a light-hearted tone",
      explication: "Un « ton léger » présente un sujet de manière peu grave ou agréable."
    },


    /* =====================================================
       LAB LANGUE ET CULTURE
       ===================================================== */

    {
      question: "Que signifie « s'inscrire à un atelier » ?",
      choix: [
        "To sign up for a workshop",
        "To broadcast a workshop",
        "To cancel a workshop",
        "To film a workshop"
      ],
      bonne: "To sign up for a workshop",
      explication: "« S'inscrire à » signifie donner son nom pour participer à une activité."
    },

    {
      question: "Que signifie « être consacré à » ?",
      choix: [
        "To be devoted to / focus on",
        "To unsubscribe from",
        "To be afraid of",
        "To receive"
      ],
      bonne: "To be devoted to / focus on",
      explication: "Quand une émission est « consacrée à » un sujet, elle porte principalement sur ce sujet."
    },


    /* =====================================================
       ATELIERS
       ===================================================== */

    {
      question: "Dans « Le Petit Prince », que signifie « apprivoiser » ?",
      choix: [
        "Créer des liens",
        "Poser une question",
        "Publier une information",
        "Recevoir un message"
      ],
      bonne: "Créer des liens",
      explication: "Dans le contexte du Petit Prince, « apprivoiser » signifie créer des liens."
    },

    {
      question: "Que signifie « Ça veut dire quoi ? »",
      choix: [
        "What does that mean?",
        "How do you spell that?",
        "How do you pronounce that?",
        "Where did you read that?"
      ],
      bonne: "What does that mean?",
      explication: "« Ça veut dire quoi ? » permet de demander la signification d'un mot ou d'une expression."
    },

    {
      question: "Quelle expression indique que deux choses sont complètement différentes ?",
      choix: [
        "Ça n'a rien à voir.",
        "C'est pareil.",
        "C'est la même chose.",
        "Ça ressemble à…"
      ],
      bonne: "Ça n'a rien à voir.",
      explication: "« Ça n'a rien à voir » indique que deux choses sont très différentes ou sans rapport."
    }

  ]

};
