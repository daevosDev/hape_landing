
// Données des features
const features = [
    {
      title: "MEME COIN TRADING, PERFECTED",
      description: "AI-Powered. Safe. Blazing Fast. All-in-One."
    },
    {
      title: "AI BUNDLE SCAN",
      description: "Social hype, smart money, trends, and token safety—audited in seconds."
    },
    // {
    //   title: "ZERO-RISK TRADING",
    //   description: "Automatically flags scams, re-used socials, rug-pulls, low liquidity, and suspicious developers."
    // },
    {
      title: "LIGHTNING SPEED",
      description: "Execute trades faster than the competition reacts."
    },
    // {
    //   title: "TOP-TIER REFERRAL PROGRAM",
    //   description: "Earn cash rewards, exclusive perks, and VIP access for every referral."
    // },
  ];
  
  // Temps global (en millisecondes)
  const globalTime = 5000; // Temps total pour chaque feature (8 secondes)
  
  // Proportions des animations
  const loaderTimeRatio = 0.25; // 25% du temps pour le loader
  const typingTimeRatio = 0.2; // 50% du temps pour le "typing"
  const fadeTimeRatio = 0.5; // 25% du temps pour la transition
//   const fadeTimeRatio = 0.25; // 25% du temps pour la transition
  
  // Calculs des durées réelles
  const loaderTime = globalTime * loaderTimeRatio;
  const typingTime = globalTime * typingTimeRatio;
  const fadeTime = globalTime * fadeTimeRatio;
  
  // Fonction pour afficher uniquement le loader
  const showLoader = () => {
    const loader = document.getElementById("loader");
    const titleElement = document.getElementById("titre_hape");
  
    // Masquer le titre et afficher le loader
    titleElement.textContent = "";
    loader.classList.remove("hidden");
  };
  
  // Fonction pour masquer le loader
  const hideLoader = () => {
    const loader = document.getElementById("loader");
    loader.classList.add("hidden");
  };
  
  // Fonction pour simuler la frappe de texte
  const typeText = (element, text, delay, onFinish) => {
    element.textContent = ""; // Réinitialiser le contenu
    let index = 0;
  
    const type = () => {
      if (index < text.length) {
        element.textContent += text[index]; // Ajouter un caractère
        index++;
        setTimeout(type, delay); // Attendre avant de taper le prochain caractère
      } else if (onFinish) {
        onFinish(); // Appeler la fonction après la frappe
      }
    };
  
    type();
  };
  
  // Fonction principale pour gérer les animations
  const typeFeature = (index) => {
    const titleElement = document.getElementById("titre_hape");
    const contentElement = document.getElementById("hape_content");
    const { title, description } = features[index];
  
    // 1. Afficher le loader
    showLoader();
  
    // 2. Après le temps du loader, afficher le texte
    setTimeout(() => {
      hideLoader();
  
      // Calcul de la vitesse de frappe en fonction du temps de "typing"
      const typingSpeed = typingTime / title.length;
  
      // Animer le titre avec l'effet de "typing"
      typeText(
        titleElement,
        title,
        typingSpeed,
        () => {
          // 3. Afficher la description avec un fade
          contentElement.textContent = description;
          contentElement.classList.add("visible");
  
          // Masquer le fade après le temps de fade
          setTimeout(() => {
            contentElement.classList.remove("visible");
          }, fadeTime);
        }
      );
    }, loaderTime); // Délai après le loader
  };
  
  // Cycle automatique des features
  let currentFeatureIndex = 0;
  const cycleFeatures = () => {
    typeFeature(currentFeatureIndex);
  
    // Passer à la prochaine feature après le temps global
    currentFeatureIndex = (currentFeatureIndex + 1) % features.length;
  };
  
  // Lancer l'animation au chargement
  cycleFeatures();
  setInterval(cycleFeatures, globalTime); // Mise à jour toutes les 8 secondes
  



/*

// Données des features
const features = [
    {
      title: "AI BUNDLE SCAN",
      description: "Social hype, smart money, trends, and token safety—audited in seconds."
    },
    {
      title: "ZERO-RISK TRADING",
      description: "Automatically flags scams, re-used socials, rug-pulls, low liquidity, and suspicious developers."
    },
    {
      title: "LIGHTNING SPEED",
      description: "Execute trades faster than the competition reacts."
    },
    {
      title: "TOP-TIER REFERRAL PROGRAM",
      description: "Earn cash rewards, exclusive perks, and VIP access for every referral."
    },
    {
      title: "MEME COIN TRADING, PERFECTED",
      description: "AI-Powered. Safe. Blazing Fast. All-in-One."
    }
  ];
  
  // Fonction pour simuler la frappe de texte avec motion blur
  const typeText = (element, text, delay, onStart, onFinish) => {
    element.innerHTML = ""; // Réinitialiser le contenu
    let index = 0;
  
    const loader = document.getElementById("loader"); // Récupérer le loader
  
    if (onStart) onStart(); // Appeler le callback "onStart" avant de commencer
  
    const type = () => {
      if (index < text.length) {
        const span = document.createElement("span");
        span.classList.add("typing-motion");
        span.textContent = text[index];
        element.appendChild(span);
  
        // Ajouter une petite animation à chaque lettre
        setTimeout(() => {
          span.classList.add("typing");
        }, 50);
  
        // Rendre la lettre finale visible
        setTimeout(() => {
          span.classList.remove("typing");
          span.classList.add("finished");
        }, 100);
  
        index++;
        setTimeout(type, delay); // Attendre avant de taper le prochain caractère
      } else {
        // Une fois la frappe terminée, appeler le callback "onFinish"
        if (onFinish) onFinish();
      }
    };
  
    type();
  };
  
  // Fonction principale pour gérer les animations
  const typeFeature = (index, typingSpeed = 100) => {
    const titleElement = document.getElementById("titre_hape");
    const contentElement = document.getElementById("hape_content");
    const loader = document.getElementById("loader");
  
    const { title, description } = features[index];
  
    // Animer le titre avec l'effet de "typing"
    typeText(
      titleElement,
      title,
      typingSpeed,
      () => {
        // Callback "onStart" : supprimer "visible" pour déclencher le fade-out
        contentElement.classList.remove("visible");
      },
      () => {
        // Callback "onFinish" : afficher la description puis le loader
        contentElement.textContent = description;
        contentElement.classList.add("visible"); // Appliquer le fade à la description
  
        // Afficher le loader après une courte pause
        setTimeout(() => {
          loader.classList.remove("hidden");
        }, 500); // Afficher le loader 500ms après le fade
      }
    );
  
    // Masquer le loader pour la prochaine transition
    setTimeout(() => {
      loader.classList.add("hidden");
    }, 4000); // Masquer le loader après 4 secondes
  };
  
  // Cycle automatique des features
  let currentFeatureIndex = 0;
  const cycleFeatures = (typingSpeed = 100) => {
    typeFeature(currentFeatureIndex, typingSpeed);
  
    // Passer à la prochaine feature après 7 secondes (5s typing + 2s loader)
    currentFeatureIndex = (currentFeatureIndex + 1) % features.length;
  };
  
  // Lancer l'animation au chargement avec une vitesse personnalisée
  const typingSpeed = 75; // Vitesse de frappe en millisecondes
  cycleFeatures(typingSpeed);
  setInterval(() => cycleFeatures(typingSpeed), 7000); // Mise à jour toutes les 7 secondes
  
// */

/*
// Données des features
const features = [
    {
      title: "AI BUNDLE SCAN",
      description: "Social hype, smart money, trends, and token safety—audited in seconds."
    },
    {
      title: "ZERO-RISK TRADING",
      description: "Automatically flags scams, re-used socials, rug-pulls, low liquidity, and suspicious developers."
    },
    {
      title: "LIGHTNING SPEED",
      description: "Execute trades faster than the competition reacts."
    },
    {
      title: "TOP-TIER REFERRAL PROGRAM",
      description: "Earn cash rewards, exclusive perks, and VIP access for every referral."
    },
    {
      title: "MEME COIN TRADING, PERFECTED",
      description: "AI-Powered. Safe. Blazing Fast. All-in-One."
    }
  ];
  
  // Fonction pour afficher uniquement le loader
  const showLoader = () => {
    const loader = document.getElementById("loader");
    const titleElement = document.getElementById("titre_hape");
  
    // Masquer le titre et afficher le loader
    titleElement.textContent = "";
    loader.classList.remove("hidden");
  };
  
  // Fonction pour masquer le loader
  const hideLoader = () => {
    const loader = document.getElementById("loader");
    loader.classList.add("hidden");
  };
  
  // Fonction pour simuler la frappe de texte
  const typeText = (element, text, delay, onStart, onFinish) => {
    element.textContent = ""; // Réinitialiser le contenu
    let index = 0;
  
    if (onStart) onStart(); // Appeler le callback "onStart" avant de commencer
  
    const type = () => {
      if (index < text.length) {
        element.textContent += text[index]; // Ajouter un caractère
        index++;
        setTimeout(type, delay); // Attendre avant de taper le prochain caractère
      } else if (onFinish) {
        onFinish(); // Appeler la fonction après la frappe
      }
    };
  
    type();
  };
  
  // Fonction principale pour gérer les animations
  const typeFeature = (index, typingSpeed = 100) => {
    const titleElement = document.getElementById("titre_hape");
    const contentElement = document.getElementById("hape_content");
    const { title, description } = features[index];
  
    // Afficher le loader avant d'afficher le titre
    showLoader();
  
    // Après une courte pause, masquer le loader et afficher le titre
    setTimeout(() => {
      hideLoader();
  
      // Animer le titre avec l'effet de "typing"
      typeText(
        titleElement,
        title,
        typingSpeed,
        () => {
          // Callback "onStart" : supprimer "visible" pour déclencher le fade-out
          contentElement.classList.remove("visible");
        },
        () => {
          // Callback "onFinish" : afficher la description
          contentElement.textContent = description;
          contentElement.classList.add("visible");
        }
      );
    }, 2000); // Le loader est visible pendant 2 secondes
  };
  
  // Cycle automatique des features
  let currentFeatureIndex = 0;
  const cycleFeatures = (typingSpeed = 100) => {
    typeFeature(currentFeatureIndex, typingSpeed);
  
    // Passer à la prochaine feature après 7 secondes (2s loader + 5s frappe)
    currentFeatureIndex = (currentFeatureIndex + 1) % features.length;
  };
  
  // Lancer l'animation au chargement avec une vitesse personnalisée
  const typingSpeed = 75; // Vitesse de frappe en millisecondes
  cycleFeatures(typingSpeed);
  setInterval(() => cycleFeatures(typingSpeed), 3000); // Mise à jour toutes les 7 secondes
  
//   */