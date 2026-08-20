/*
    ============================================================
    ============================================================
                   VOCABULAIRE DU COURS

       C'EST PRINCIPALEMENT ICI QUE VOUS AJOUTEREZ
                  LES NOUVEAUX MOTS.

    ============================================================
    ============================================================
    */


   

    /*
    ============================================================
    ============================================================

              FIN DU VOCABULAIRE DU COURS

       Vous n'avez normalement pas besoin de modifier
                   ce qui suit.

    ============================================================
    ============================================================
    */


    const zoneVocabulaire =
      document.getElementById("vocabulaire");


    /*
    ============================================================
    CRÉATION D'UNE SECTION
    ============================================================
    */

    function creerSection(section) {

      let html = `<h3>${section.titre}</h3>`;


      /*
      ----------------------------------------------------------
      NOTE PÉDAGOGIQUE
      ----------------------------------------------------------
      */

      if (section.type === "note") {

        html += `
          <div class="note-vocabulaire">
            ${section.html}
          </div>
        `;

        return html;
      }


      /*
      ----------------------------------------------------------
      NOMS
      ----------------------------------------------------------
      */

      if (section.type === "noms") {

        html += `
          <div class="tableau-vocabulaire">

            <div class="ligne titre">
              <span>Français</span>
              <span>Pluriel</span>
              <span class="anglais">English</span>
            </div>
        `;

        section.mots.forEach(mot => {

          html += `
            <div class="ligne mot">
              <span>${mot[0]}</span>
              <span>${mot[1]}</span>
              <span class="anglais">${mot[2]}</span>
            </div>
          `;

        });

        html += `</div>`;
      }


      /*
      ----------------------------------------------------------
      EXPRESSIONS / VERBES
      ----------------------------------------------------------
      */

      if (section.type === "expressions") {

        html += `
          <div class="tableau-vocabulaire">

            <div class="ligne titre deux-colonnes">
              <span>Français</span>
              <span class="anglais">English</span>
            </div>
        `;

        section.mots.forEach(mot => {

          html += `
            <div class="ligne deux-colonnes mot">
              <span>${mot[0]}</span>
              <span class="anglais">${mot[1]}</span>
            </div>
          `;

        });

        html += `</div>`;
      }


      /*
      ----------------------------------------------------------
      ADJECTIFS
      ----------------------------------------------------------
      */

      if (section.type === "adjectifs") {

        html += `
          <div class="tableau-vocabulaire">

            <div class="ligne adjectifs titre">
              <span>Masculin</span>
              <span>Féminin</span>
              <span>Pluriel</span>
              <span class="anglais">English</span>
            </div>
        `;

        section.mots.forEach(mot => {

          html += `
            <div class="ligne adjectifs mot">
              <span>${mot[0]}</span>
              <span>${mot[1]}</span>
              <span>${mot[2]}</span>
              <span class="anglais">${mot[3]}</span>
            </div>
          `;

        });

        html += `</div>`;
      }


      return html;
    }



    /*
    ============================================================
    CRÉATION DE LA PAGE
    ============================================================
    */

    function afficherVocabulaire() {

      let html = "";


      vocabulaire.forEach(unite => {

        html += `
          <details open class="unite">

            <summary>
              ${unite.unite}
            </summary>

            <div class="contenu-unite">
        `;


        unite.situations.forEach(situation => {

          html += `
            <details class="situation">

              <summary>
                ${situation.titre}
              </summary>
          `;


          if (
            !situation.sections ||
            situation.sections.length === 0
          ) {

            html += `
              <p class="a-venir">
                Vocabulaire à venir.
              </p>
            `;

          } else {

            situation.sections.forEach(section => {

              html += creerSection(section);

            });

          }


          html += `
            </details>
          `;

        });


        html += `
            </div>
          </details>
        `;

      });


      zoneVocabulaire.innerHTML = html;
    }



    afficherVocabulaire();



    /*
    ============================================================
    MASQUER / AFFICHER L'ANGLAIS
    ============================================================
    */

    const boutonAnglais =
      document.getElementById("bouton-anglais");


    boutonAnglais.addEventListener("click", function () {

      document.body.classList.toggle("masquer-anglais");


      if (
        document.body.classList.contains("masquer-anglais")
      ) {

        boutonAnglais.textContent =
          "Afficher l'anglais";

      } else {

        boutonAnglais.textContent =
          "Masquer l'anglais";

      }

    });



    /*
    ============================================================
    RECHERCHE
    ============================================================
    */

    const champRecherche =
      document.getElementById("recherche");

    const aucunResultat =
      document.getElementById("aucun-resultat");


    champRecherche.addEventListener("input", function () {

      const recherche =
        champRecherche.value
          .toLowerCase()
          .trim();


      const lignes =
        document.querySelectorAll(".mot");


      let nombreResultats = 0;


      lignes.forEach(ligne => {

        const texte =
          ligne.textContent.toLowerCase();


        if (
          recherche === "" ||
          texte.includes(recherche)
        ) {

          ligne.style.display = "";
          nombreResultats++;

        } else {

          ligne.style.display = "none";

        }

      });


      /*
      Ouvrir les situations automatiquement
      pendant une recherche.
      */

      if (recherche !== "") {

        document
          .querySelectorAll(".situation")
          .forEach(details => {

            details.open = true;

          });

      }


      /*
      Message si aucun résultat.
      */

      if (
        recherche !== "" &&
        nombreResultats === 0
      ) {

        aucunResultat.style.display = "block";

      } else {

        aucunResultat.style.display = "none";

      }

    });


