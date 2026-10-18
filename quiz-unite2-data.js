/* =========================================================
   QUIZ — UNITÉ 2 : « VOUS AVEZ DEUX MINUTES ? »
   15 questions de grammaire + 15 questions de vocabulaire
   Niveau A2
   ========================================================= */

const quizUnite2 = {

  /* =======================================================
     GRAMMAIRE ET CONJUGAISON
     ======================================================= */

  grammaire: [
    {
      question: "C'est une personne ___ travaille dans un garage.",
      choix: ["qui", "que", "où", "qu'"],
      bonne: "qui",
      explication: "« Qui » est le sujet du verbe « travaille »."
    },
    {
      question: "Voici le film ___ nous avons regardé hier.",
      choix: ["que", "qui", "où", "dont"],
      bonne: "que",
      explication: "« Que » remplace le complément d'objet direct du verbe « avons regardé »."
    },
    {
      question: "C'est la ville ___ j'ai rencontré mon amie.",
      choix: ["où", "qui", "que", "qu'"],
      bonne: "où",
      explication: "« Où » indique ici le lieu de la rencontre."
    },
    {
      question: "C'est une actrice ___ j'admire beaucoup.",
      choix: ["que", "qui", "où", "dont"],
      bonne: "que",
      explication: "On admire quelqu'un : « que » est complément d'objet direct."
    },
    {
      question: "Voilà l'homme ___ habite près de chez moi.",
      choix: ["qui", "que", "où", "qu'"],
      bonne: "qui",
      explication: "« Qui » est le sujet du verbe « habite »."
    },
    {
      question: "Hier, nous ___ le train pour Bordeaux.",
      choix: ["avons pris", "sommes pris", "avons prendre", "prenions pris"],
      bonne: "avons pris",
      explication: "Au passé composé, « prendre » se conjugue avec « avoir » : nous avons pris."
    },
    {
      question: "Marie ___ à Paris hier soir.",
      choix: ["est arrivée", "a arrivée", "est arrivé", "a arriver"],
      bonne: "est arrivée",
      explication: "« Arriver » se conjugue avec « être » au passé composé. Avec « Marie », on ajoute -e au participe passé."
    },
    {
      question: "Ils ___ un accident de voiture la semaine dernière.",
      choix: ["ont eu", "sont eu", "ont été", "avaient eu"],
      bonne: "ont eu",
      explication: "Le passé composé de « avoir » est « avoir » + « eu » : ils ont eu."
    },
    {
      question: "Ce matin, elle ___ à six heures.",
      choix: ["s'est levée", "a levé", "s'est levé", "se levait"],
      bonne: "s'est levée",
      explication: "« Se lever » est un verbe pronominal : elle s'est levée. Le participe passé s'accorde ici avec le sujet."
    },
    {
      question: "Choisis la phrase correcte au passé composé négatif.",
      choix: ["Je n'ai pas rencontré Paul.", "Je n'ai rencontré pas Paul.", "Je ne pas ai rencontré Paul.", "Je n'ai pas rencontrer Paul."],
      bonne: "Je n'ai pas rencontré Paul.",
      explication: "Au passé composé, « ne ... pas » entoure l'auxiliaire : je n'ai pas rencontré."
    },
    {
      question: "Quand j'étais petit, je ___ souvent le bus pour aller à l'école.",
      choix: ["prenais", "prendais", "prenait", "prendrais"],
      bonne: "prenais",
      explication: "L'imparfait décrit ici une habitude passée : je prenais."
    },
    {
      question: "À cette époque, nous ___ dans un petit village.",
      choix: ["habitions", "habitons", "habitaient", "habitez"],
      bonne: "habitions",
      explication: "À l'imparfait, avec « nous », la terminaison est -ions : nous habitions."
    },
    {
      question: "Avant, mes grands-parents ___ une petite voiture rouge.",
      choix: ["avaient", "avions", "avait", "ont"],
      bonne: "avaient",
      explication: "À l'imparfait, « avoir » avec « ils/elles » donne « avaient »."
    },
    {
      question: "Quand elle était jeune, elle ___ très timide.",
      choix: ["était", "étais", "étaient", "a été"],
      bonne: "était",
      explication: "« Était » est l'imparfait de « être » à la troisième personne du singulier."
    },
    {
      question: "Hier, les deux amies ___ au café à midi.",
      choix: ["se sont retrouvées", "se sont retrouvés", "ont retrouvées", "se sont retrouver"],
      bonne: "se sont retrouvées",
      explication: "Le verbe pronominal « se retrouver » se conjugue avec « être » ; ici, le participe s'accorde au féminin pluriel."
    }
  ],

  /* =======================================================
     VOCABULAIRE
     ======================================================= */

  vocabulaire: [
    {
      question: "Comment appelle-t-on une personne qui répare les voitures ?",
      choix: ["Un mécanicien", "Un facteur", "Un serveur", "Un agriculteur"],
      bonne: "Un mécanicien",
      explication: "Un mécanicien ou une mécanicienne répare les véhicules."
    },
    {
      question: "Quelle profession consiste à distribuer le courrier ?",
      choix: ["Facteur / factrice", "Acteur / actrice", "Garagiste", "Réalisateur / réalisatrice"],
      bonne: "Facteur / factrice",
      explication: "Le facteur ou la factrice distribue les lettres et les colis."
    },
    {
      question: "Une personne qui travaille dans les champs est généralement…",
      choix: ["un agriculteur", "un serveur", "un acteur", "un garagiste"],
      bonne: "un agriculteur",
      explication: "Un agriculteur ou une agricultrice travaille dans l'agriculture."
    },
    {
      question: "Que signifie « bien s'entendre avec quelqu'un » ?",
      choix: ["Avoir de bonnes relations avec cette personne", "Parler plus fort que cette personne", "Ne jamais rencontrer cette personne", "Habiter dans la même maison"],
      bonne: "Avoir de bonnes relations avec cette personne",
      explication: "Bien s'entendre signifie avoir une bonne relation avec quelqu'un."
    },
    {
      question: "Que signifie « oser déranger quelqu'un » ?",
      choix: ["Avoir le courage de l'interrompre", "Éviter de lui parler", "Lui donner un rendez-vous", "Lui demander son adresse"],
      bonne: "Avoir le courage de l'interrompre",
      explication: "« Oser » signifie avoir le courage de faire quelque chose, même si cela gêne un peu."
    },
    {
      question: "Qu'est-ce que le covoiturage ?",
      choix: ["Partager un trajet en voiture", "Voyager seul en train", "Prendre le métro chaque jour", "Louer un vélo à la journée"],
      bonne: "Partager un trajet en voiture",
      explication: "Le covoiturage consiste à partager un trajet en voiture avec d'autres personnes."
    },
    {
      question: "Où attend-on généralement un train dans une gare ?",
      choix: ["Sur le quai", "Dans le coffre", "Sur la route", "Dans le moteur"],
      bonne: "Sur le quai",
      explication: "Le quai est l'endroit où les voyageurs attendent pour monter dans le train."
    },
    {
      question: "Qu'est-ce qu'une camionnette ?",
      choix: ["Un petit véhicule utilitaire", "Un train régional", "Une ligne de métro", "Une station de tramway"],
      bonne: "Un petit véhicule utilitaire",
      explication: "Une camionnette est un véhicule utilisé notamment pour transporter du matériel ou des marchandises."
    },
    {
      question: "Que signifie « éteindre le moteur » ?",
      choix: ["Arrêter le moteur", "Démarrer le moteur", "Réparer le moteur", "Changer le moteur"],
      bonne: "Arrêter le moteur",
      explication: "« Éteindre le moteur » signifie le mettre à l'arrêt."
    },
    {
      question: "Dans une voiture, à quoi sert le coffre ?",
      choix: ["À ranger les bagages", "À conduire le véhicule", "À regarder la route", "À allumer le moteur"],
      bonne: "À ranger les bagages",
      explication: "Le coffre est l'espace où l'on place généralement les bagages."
    },
    {
      question: "Une personne « bavarde » est une personne qui…",
      choix: ["parle beaucoup", "parle très peu", "se met souvent en colère", "travaille lentement"],
      bonne: "parle beaucoup",
      explication: "Une personne bavarde aime beaucoup parler."
    },
    {
      question: "Quel adjectif décrit une personne qui aime donner et partager ?",
      choix: ["Généreuse", "Timide", "Discrète", "Excentrique"],
      bonne: "Généreuse",
      explication: "Une personne généreuse aime donner et partager avec les autres."
    },
    {
      question: "Que signifie « une moustache » ?",
      choix: ["Des poils au-dessus de la bouche", "Des cheveux sur la tête", "Des poils sur le menton", "Un vêtement sur la tête"],
      bonne: "Des poils au-dessus de la bouche",
      explication: "La moustache pousse au-dessus de la lèvre supérieure ; la barbe pousse notamment sur le menton."
    },
    {
      question: "Pour commencer poliment une conversation avec un inconnu, on peut dire…",
      choix: ["Excusez-moi, je peux vous demander quelque chose ?", "Laissez-moi tranquille !", "Vous devez me répondre !", "Ne me parlez pas !"],
      bonne: "Excusez-moi, je peux vous demander quelque chose ?",
      explication: "« Excusez-moi » et « je peux vous demander quelque chose ? » permettent d'aborder quelqu'un poliment."
    },
    {
      question: "Dans une annonce de covoiturage, que signifie « Nous pouvons vous déposer à la gare » ?",
      choix: ["Nous pouvons vous laisser à la gare", "Nous pouvons vous attendre toute la journée", "Nous pouvons vous vendre un billet", "Nous pouvons vous prêter notre voiture"],
      bonne: "Nous pouvons vous laisser à la gare",
      explication: "« Déposer quelqu'un » signifie l'emmener quelque part et l'y laisser."
    }
  ]
};
