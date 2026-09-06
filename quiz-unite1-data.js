/* =========================================================
   QUIZ — UNITÉ 1
   DONNÉES DES QUESTIONS
   Niveau A2

   Pour ajouter une question plus tard :
   copie simplement un bloc { ... }
   dans la bonne partie.
   ========================================================= */


const quizUnite1 = {


  /* =======================================================
     GRAMMAIRE
     ======================================================= */

  grammaire: [

    {
      question:
        "Vous êtes à la gare. Votre train part dans cinq minutes. Vous ___ un billet au guichet.",

      choix: [
        "achetez",
        "achetons",
        "achète",
        "acheter"
      ],

      bonne: "achetez",

      explication:
        "Le sujet est « vous ». Au présent : vous achetez."
    },


    {
      question:
        "Luc a téléphoné à l'agence il y a quelques secondes. Il dit : « Je ___ d'appeler l'agence. »",

      choix: [
        "viens",
        "vais",
        "suis",
        "fais"
      ],

      bonne: "viens",

      explication:
        "Le passé récent se construit avec « venir de + infinitif » : je viens d'appeler."
    },


    {
      question:
        "— Tu peux parler ? — Non, je ___ le dîner. Je te rappelle dans dix minutes.",

      choix: [
        "viens de préparer",
        "suis en train de préparer",
        "vais préparer",
        "préparerai"
      ],

      bonne:
        "suis en train de préparer",

      explication:
        "L'action est en cours maintenant : « être en train de + infinitif »."
    },


    {
      question:
        "Ce soir, nous avons réservé une table. Nous ___ au restaurant à 20 h.",

      choix: [
        "allons manger",
        "venons de manger",
        "sommes manger",
        "avons manger"
      ],

      bonne:
        "allons manger",

      explication:
        "Le futur proche se construit avec « aller + infinitif » : nous allons manger."
    },


    {
      question:
        "J'achète le cadeau cet après-midi. Remplacez « le cadeau » : « Je ___ achète cet après-midi. »",

      choix: [
        "l'",
        "lui",
        "en",
        "leur"
      ],

      bonne: "l'",

      explication:
        "« Le cadeau » est un COD masculin singulier. Devant « achète », le pronom « le » devient « l' » : je l'achète."
    },


    {
      question:
        "Sophie prépare les invitations. → Sophie ___ prépare.",

      choix: [
        "leur",
        "les",
        "en",
        "lui"
      ],

      bonne: "les",

      explication:
        "« Les invitations » est un complément d'objet direct pluriel : Sophie les prépare."
    },


    {
      question:
        "— Vous voulez du saumon ? — Oui, j'___ veux un peu.",

      choix: [
        "en",
        "le",
        "lui",
        "les"
      ],

      bonne: "en",

      explication:
        "« En » remplace « du saumon ». La quantité « un peu » reste dans la phrase."
    },


    {
      question:
        "Nous avons acheté six bouteilles d'eau. → Nous ___ avons acheté six.",

      choix: [
        "les",
        "en",
        "leur",
        "l'"
      ],

      bonne: "en",

      explication:
        "Avec une quantité précise, on utilise « en » et on garde le nombre : nous en avons acheté six."
    },


    {
      question:
        "Il y a douze invités, mais seulement quatre desserts. Quelle phrase convient ?",

      choix: [
        "Il y en a trop.",
        "Il n'y en a pas assez.",
        "Il y en a beaucoup.",
        "Il y en a assez."
      ],

      bonne:
        "Il n'y en a pas assez.",

      explication:
        "Quatre desserts pour douze invités : la quantité est insuffisante. Il n'y en a pas assez."
    },


    {
      question:
        "Complétez : « J'adore ___ chocolat, mais aujourd'hui je ne mange pas ___ chocolat. »",

      choix: [
        "le / de",
        "du / du",
        "le / le",
        "de / du"
      ],

      bonne:
        "le / de",

      explication:
        "On dit « j'adore le chocolat » pour parler de l'aliment en général. Après la négation : « je ne mange pas de chocolat »."
    },


    {
      question:
        "Quelle phrase est correcte pour parler d'une quantité non précisée ?",

      choix: [
        "Je mange du saumon.",
        "Je mange de le saumon.",
        "Je mange le du saumon.",
        "Je mange des saumon."
      ],

      bonne:
        "Je mange du saumon.",

      explication:
        "Pour une quantité non précisée d'un nom masculin singulier, on utilise « du »."
    },


    {
      question:
        "Samedi prochain, nous ___ une soirée pour l'anniversaire de Paul.",

      choix: [
        "organisons",
        "organiserons",
        "organiserions",
        "organisé"
      ],

      bonne:
        "organiserons",

      explication:
        "Au futur simple, « organiser » avec « nous » donne « nous organiserons »."
    },


    {
      question:
        "Demain, j'___ les invitations aux participants.",

      choix: [
        "envoie",
        "envoyais",
        "enverrai",
        "envoyerai"
      ],

      bonne:
        "enverrai",

      explication:
        "Au futur simple, « envoyer » avec « je » donne « j'enverrai »."
    },


    {
      question:
        "Complétez : « Je ne sais pas ___ Paul pourra venir à la soirée. »",

      choix: [
        "si il",
        "s'il",
        "s'elle",
        "si l'il"
      ],

      bonne:
        "s'il",

      explication:
        "« Si » s'élide devant « il » : si + il → s'il."
    },


    {
      question:
        "Quelle phrase est correcte ?",

      choix: [
        "Je ne sais pas s'elle est disponible.",
        "Je ne sais pas si elle est disponible.",
        "Je ne sais pas si-elle est disponible.",
        "Je ne sais pas s'il elle est disponible."
      ],

      bonne:
        "Je ne sais pas si elle est disponible.",

      explication:
        "Devant « elle », on garde « si » : si elle."
    }

  ],



  /* =======================================================
     VOCABULAIRE
     ======================================================= */

  vocabulaire: [

    {
      question:
        "À la gare, vous voulez savoir à quelle heure part votre train. Vous cherchez...",

      choix: [
        "l'horaire",
        "la consigne",
        "la provenance",
        "le quai"
      ],

      bonne:
        "l'horaire",

      explication:
        "L'horaire indique notamment l'heure prévue du départ ou de l'arrivée."
    },


    {
      question:
        "Votre train arrive à Lyon et vous devez prendre un autre train pour Marseille. Vous avez...",

      choix: [
        "une correspondance",
        "une provenance",
        "une consigne",
        "un retard"
      ],

      bonne:
        "une correspondance",

      explication:
        "Une correspondance est un changement de train ou de transport pendant un voyage."
    },


    {
      question:
        "Le train devait partir à 10 h 15. Il part finalement à 11 h. Il a...",

      choix: [
        "une destination",
        "un retard",
        "une voie",
        "un renseignement"
      ],

      bonne:
        "un retard",

      explication:
        "Quand un train part ou arrive plus tard que prévu, il a du retard."
    },


    {
      question:
        "Vous voulez acheter un billet auprès d'un employé de la gare. Vous allez...",

      choix: [
        "au guichet",
        "à la consigne",
        "sur la voie",
        "au panneau des départs"
      ],

      bonne:
        "au guichet",

      explication:
        "Le guichet est l'endroit où l'on peut acheter un billet ou demander des renseignements."
    },


    {
      question:
        "Votre train part dans deux minutes. Vous courez vers le quai parce que vous êtes...",

      choix: [
        "patient",
        "pressé",
        "convivial",
        "réputé"
      ],

      bonne:
        "pressé",

      explication:
        "Être pressé signifie avoir peu de temps et devoir agir rapidement."
    },


    {
      question:
        "À son anniversaire, Léa ferme les yeux et ___ les bougies de son gâteau.",

      choix: [
        "souffle",
        "relance",
        "composte",
        "réserve"
      ],

      bonne:
        "souffle",

      explication:
        "Pour un anniversaire, on souffle les bougies du gâteau."
    },


    {
      question:
        "Vous offrez un parfum à votre amie pour son anniversaire. Le parfum est...",

      choix: [
        "un cadeau",
        "un renseignement",
        "un ingrédient",
        "un événement"
      ],

      bonne:
        "un cadeau",

      explication:
        "Un cadeau est quelque chose que l'on offre à une personne."
    },


    {
      question:
        "Au restaurant, vous commandez d'abord une soupe, puis du saumon. La soupe est...",

      choix: [
        "une entrée",
        "un plat principal",
        "un dessert",
        "un ingrédient"
      ],

      bonne:
        "une entrée",

      explication:
        "Une entrée est servie avant le plat principal."
    },


    {
      question:
        "Pour faire un gâteau, vous utilisez des œufs, du chocolat et du beurre. Ce sont...",

      choix: [
        "des ingrédients",
        "des événements",
        "des animations",
        "des invitations"
      ],

      bonne:
        "des ingrédients",

      explication:
        "Un ingrédient est un aliment utilisé dans la préparation d'une recette."
    },


    {
      question:
        "Votre entreprise organise une soirée. Vous devez décider combien d'argent vous pouvez dépenser. Vous devez...",

      choix: [
        "définir un budget",
        "fixer une destination",
        "souffler des bougies",
        "faire connaissance"
      ],

      bonne:
        "définir un budget",

      explication:
        "Définir un budget signifie déterminer combien d'argent est disponible pour l'événement."
    },


    {
      question:
        "Vous avez envoyé une invitation à Marc il y a une semaine. Il n'a toujours pas répondu. Vous allez...",

      choix: [
        "le relancer",
        "le composter",
        "le servir",
        "le souffler"
      ],

      bonne:
        "le relancer",

      explication:
        "Relancer quelqu'un signifie reprendre contact avec cette personne pour obtenir une réponse."
    },


    {
      question:
        "À une soirée, vous rencontrez plusieurs nouveaux collègues et vous discutez avec eux pour...",

      choix: [
        "faire connaissance",
        "faire les courses",
        "faire le ménage",
        "faire peur"
      ],

      bonne:
        "faire connaissance",

      explication:
        "Faire connaissance signifie commencer à connaître une personne que l'on vient de rencontrer."
    },


    {
      question:
        "Vous voulez organiser votre soirée dans un endroit au centre de la ville et facile d'accès. Vous cherchez un lieu...",

      choix: [
        "central",
        "impatient",
        "pressé",
        "pimenté"
      ],

      bonne:
        "central",

      explication:
        "Un lieu central est situé au centre ou dans une zone facilement accessible."
    },


    {
      question:
        "Un collègue vous invite samedi, mais vous serez à l'étranger. Quelle réponse est la plus appropriée ?",

      choix: [
        "Je ne pourrai malheureusement pas venir.",
        "Merci de votre présence.",
        "Je vous remercie d'être venu.",
        "Vous apportez quoi ?"
      ],

      bonne:
        "Je ne pourrai malheureusement pas venir.",

      explication:
        "Cette formule permet de refuser poliment une invitation."
    },


    {
      question:
        "Vous écrivez à une enseignante que vous connaissez peu pour la remercier de son aide. Quelle formule de fin est la plus appropriée ?",

      choix: [
        "Bisous,",
        "Je t'embrasse,",
        "Bien cordialement,",
        "Coucou !"
      ],

      bonne:
        "Bien cordialement,",

      explication:
        "« Bien cordialement » est une formule polie et professionnelle adaptée à cette situation."
    }

  ]

};
