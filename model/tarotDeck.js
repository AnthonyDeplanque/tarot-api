const tarotDeck = [
  {
    name: "Le Fou",
    description:
      "La carte suggère que vos investissements ont le potentiel de donner des résultats positifs. Le Fou symbolise de nouveaux départs, la prise de risques et l’adoption d’approches non conventionnelles. Il vous encourage à faire confiance à vos instincts et à explorer de nouvelles opportunités. Cependant, il est important de faire preuve de prudence et d’éviter l’imprudence.",
    image: "/images/thefool.jpeg",
  },
  {
    name: "Le Magicien",
    description:
      "La carte suggère que vos transactions ont le potentiel de donner des résultats réussis. Le Magicien représente le pouvoir, la compétence et la manifestation des objectifs. Il indique que vous avez les outils et les capacités nécessaires pour rendre vos investissements profitables.",
    image: "/images/themagician.jpeg",
  },
  {
    name: "La Grande Prêtresse",
    description:
      "Selon la carte de La Grande Prêtresse, vos transactions ont le potentiel de donner des résultats mystérieux et intuitifs. Faites confiance à vos instincts, puisez dans des connaissances cachées, et explorez des perspectives alternatives pour prendre des décisions éclairées.",
    image: "/images/thehighpriestess.jpeg",
  },
  {
    name: "L’Impératrice",
    description:
      "Selon la carte de L’Impératrice, vos transactions ont le potentiel de donner des résultats abondants et fructueux. L’Impératrice représente la croissance, le soin et la prospérité. Cette carte suggère que vos investissements pourraient apporter des résultats positifs et une abondance financière.",
    image: "/images/theempress.jpeg",
  },
  {
    name: "L’Empereur",
    description:
      "La carte de L’Empereur représente l'autorité, la structure et la stabilité. Elle symbolise un moment où il est nécessaire de prendre le contrôle et d'établir une base solide pour vos transactions. Cette carte suggère que vos investissements ont le potentiel de donner des résultats positifs grâce à une approche disciplinée et structurée.",
    image: "/images/theemperor.jpeg",
  },
  {
    name: "Le Pape",
    description:
      "Selon la carte du Pape, vos transactions ont le potentiel de donner des résultats structurés et traditionnels. Le Pape représente la conformité, la tradition et les systèmes établis. Cette carte suggère que vos investissements pourraient bénéficier du respect des lignes directrices établies et d'une approche conservatrice.",
    image: "/images/thehierophant.jpeg",
  },
  {
    name: "Les Amoureux",
    description:
      "Selon la carte des Amoureux, vos transactions ont le potentiel de donner des résultats harmonieux et positifs. Les Amoureux représentent le partenariat, l'alignement et les choix basés sur les valeurs personnelles. Cette carte suggère que vos investissements peuvent prospérer lorsque vous prenez des décisions qui résonnent avec vos croyances et valeurs.",
    image: "/images/thelovers.jpg",
  },
  {
    name: "Le Chariot",
    description:
      "Selon la carte du Chariot, vos transactions ont le potentiel de donner des résultats victorieux et réussis. Le Chariot représente la détermination, la volonté et l'affirmation de soi. Il suggère qu'en déployant des efforts concentrés et disciplinés, vous pouvez surmonter les défis et obstacles sur le marché.",
    image: "/images/thechariot.jpeg",
  },
  {
    name: "La Force",
    description:
      "Selon la carte de La Force, vos transactions ont le potentiel de donner de la force et de la résilience. La Force représente le courage, la puissance intérieure et la capacité à surmonter les défis. Elle suggère qu'en puisant dans votre force intérieure et en restant concentré, vous pouvez naviguer sur le marché en toute confiance.",
    image: "/images/thestrength.jpeg",
  },
  {
    name: "L'Hermite",
    description:
      "Selon la carte de L'Hermite, vos transactions peuvent aboutir à une introspection et à la solitude. L'Hermite représente la sagesse, la réflexion sur soi et la recherche de conseils intérieurs. Cette carte suggère que vos investissements peuvent bénéficier d'une pause pour réfléchir à vos stratégies.",
    image: "/images/thehermit.jpeg",
  },
  {
    name: "La Roue de la Fortune",
    description:
      "Selon la carte de La Roue de la Fortune, vos transactions peuvent donner des résultats imprévisibles. La Roue de la Fortune représente les cycles et les changements dans la vie, indiquant que vos investissements peuvent être soumis aux hauts et aux bas du marché.",
    image: "/images/wheeloffortune.jpeg",
  },
  {
    name: "La Justice",
    description:
      "Selon la carte de La Justice, vos transactions peuvent donner des résultats justes et équilibrés. La Justice représente l'équité, la vérité et la responsabilité. Elle suggère que vos investissements seront influencés par le principe de cause à effet.",
    image: "/images/justice.jpeg",
  },
  {
    name: "Le Pendu",
    description:
      "Selon la carte du Pendu, vos transactions peuvent aboutir à une période de suspension, de sacrifice et de changement de perspective. Le Pendu représente un temps de pause et d'abandon, vous encourageant à lâcher prise sur les anciennes stratégies ou croyances qui ne vous servent plus.",
    image: "/images/thehangedman.jpeg",
  },
  {
    name: "La Mort",
    description:
      "Selon la carte de La Mort, vos transactions peuvent aboutir à une transformation, des fins et de nouveaux commencements. La Mort représente un changement significatif et la nécessité de laisser aller le vieux pour faire place au nouveau.",
    image: "/images/death.jpeg",
  },
  {
    name: "La Tempérance",
    description:
      "Selon la carte de La Tempérance, vos transactions peuvent aboutir à l'équilibre, la modération et l'harmonie. La Tempérance représente la recherche du juste milieu et l'intégration de différents éléments. Elle conseille d'adopter une approche équilibrée, de pratiquer la modération et de s'adapter aux conditions du marché.",
    image: "/images/temperance.jpeg",
  },
  {
    name: "Le Diable",
    description:
      "Selon la carte du Diable, vos transactions peuvent aboutir à l'emprisonnement, aux illusions et à des résultats négatifs. Le Diable représente la tentation, le matérialisme et les schémas nocifs ou les dépendances.",
    image: "/images/thedevil.jpeg",
  },
  {
    name: "La Tour",
    description:
      "Selon la carte de La Tour, vos transactions peuvent aboutir à des résultats inattendus et perturbateurs. La Tour représente un changement soudain, un bouleversement et la rupture des structures existantes.",
    image: "/images/thetower.jpeg",
  },
  {
    name: "L'Étoile",
    description:
      "Selon la carte de L'Étoile, vos transactions peuvent aboutir à l'espoir, l'inspiration et des résultats positifs. L'Étoile représente une lumière guideuse, offrant un sentiment d'optimisme et de renouveau.",
    image: "/images/thestar.jpeg",
  },
  {
    name: "La Lune",
    description:
      "Selon la carte de La Lune, vos transactions peuvent donner des résultats influencés par l'intuition, les émotions et le subconscient. La Lune représente le domaine de l'inconnu, des illusions et des influences cachées.",
    image: "/images/themoon.jpeg",
  },
  {
    name: "Le Soleil",
    description:
      "Selon la carte du Soleil, vos transactions ont probablement des résultats de succès, de positivité et d'abondance. Le Soleil représente la joie, la vitalité et des résultats favorables.",
    image: "/images/thesun.jpeg",
  },
  {
    name: "Le Jugement",
    description:
      "Selon la carte du Jugement, vos transactions peuvent donner lieu à une période d'évaluation, de responsabilité et de renaissance potentielle. Cette carte représente un appel à réfléchir sur vos choix et actions passés, et à prendre des décisions basées sur un niveau de conscience supérieur.",
    image: "/images/judgement.jpeg",
  },
  {
    name: "Le Monde",
    description:
      "Selon la carte du Monde, vos transactions ont probablement des résultats réussis et épanouissants. Le Monde représente l'accomplissement, l'achèvement et la plénitude.",
    image: "/images/theworld.jpeg",
  },
  {
    name: "As de Coupes",
    description:
      "La carte de l'As de Coupes suggère que vos transactions pourraient offrir de nouvelles opportunités et une satisfaction émotionnelle. Cette carte représente le potentiel pour de nouveaux commencements, l'abondance et une énergie positive. Elle vous conseille d'aborder vos investissements avec un cœur ouvert, en permettant à votre intuition et à vos émotions de vous guider. L'As de Coupes signifie le potentiel de joie, de satisfaction et de récompenses financières dans vos transactions.\n\nCependant, il est important de se rappeler que la carte ne garantit pas de résultats spécifiques. Les résultats réels dépendront de votre capacité à saisir les nouvelles opportunités, à écouter votre intuition et à prendre des décisions éclairées. Abordez vos transactions avec un cœur ouvert et alignez-les avec vos valeurs les plus élevées pour augmenter la probabilité de résultats positifs et satisfaisants.",
    image: "/images/aceofcups.jpeg",
  },
  {
    name: "Deux de Coupes",
    description:
      "Selon la carte du Deux de Coupes, vos transactions pourraient aboutir à des résultats positifs et harmonieux. Le Deux de Coupes représente les partenariats, les connexions et les bénéfices mutuels. Il suggère que collaborer avec d'autres et rechercher des objectifs partagés peut améliorer vos chances de succès en trading. En favorisant une communication ouverte, la confiance et des connexions émotionnelles, vous pouvez créer un sentiment d'harmonie et d'équilibre dans vos investissements.\n\nCependant, il est important de noter que la carte du Deux de Coupes ne garantit pas de résultats spécifiques. Les résultats réels dépendront de votre capacité à cultiver des partenariats solides, à communiquer efficacement et à prendre des décisions éclairées. Abordez vos transactions avec un esprit collaboratif, recherchez des arrangements mutuellement bénéfiques et cultivez des relations saines pour augmenter la probabilité de résultats favorables.",
    image: "/images/twoofcups.jpeg",
  },
  {
    name: "Trois de Coupes",
    description:
      "La carte du Trois de Coupes suggère que vos transactions pourraient aboutir à des résultats positifs et joyeux. Cette carte représente la célébration, l'amitié et l'abondance. Elle indique que vos investissements ont le potentiel de générer un sentiment d'harmonie, de succès partagé et de satisfaction.\n\nLa carte vous conseille de cultiver des connexions et de collaborer avec d'autres dans vos activités de trading. En travaillant ensemble et en célébrant les réussites, vous pouvez améliorer vos résultats de trading et créer un réseau de soutien.\n\nCependant, il est important de se rappeler que la carte du Trois de Coupes ne garantit pas de résultats spécifiques. Les résultats réels dépendront de votre capacité à entretenir des relations, à collaborer efficacement et à prendre des décisions éclairées dans le marché des cryptomonnaies.",
    image: "/images/threeofcups.jpeg",
  },
  {
    name: "Quatre de Coupes",
    description:
      "La carte du Quatre de Coupes suggère que vos transactions pourraient aboutir à une période de contemplation et d'introspection. Le Quatre de Coupes représente une période de réflexion, où vous pourriez vous sentir insatisfait ou désintéressé par les opportunités d'investissement actuelles qui vous sont présentées. Elle indique un besoin de réévaluer vos priorités et de considérer si d'autres options sont disponibles.\n\nCette carte vous conseille de regarder au-delà de ce qui est immédiatement devant vous et de rester ouvert aux nouvelles possibilités. Elle vous urge à examiner votre état émotionnel et vos désirs par rapport à vos investissements. Il pourrait être temps de faire une pause, de réévaluer vos stratégies et de considérer si d'autres opportunités s'alignent mieux avec vos objectifs.",
    image: "/images/fourofcups.jpeg",
  },
  {
    name: "Cinq de Coupes",
    description:
      "La carte du Cinq de Coupes suggère que vos transactions pourraient susciter des sentiments de déception ou de perte. Le Cinq de Coupes représente une période de bouleversements émotionnels et de focalisation sur les échecs passés ou les opportunités manquées. Elle signifie qu'il pourrait y avoir des revers ou des défis dans vos investissements, conduisant à un sentiment de regret ou de désillusion.\n\nCependant, il est important de noter que le Cinq de Coupes porte également un message d'apprentissage et de résilience. Bien qu'il puisse y avoir de la déception, il vous encourage à reconnaître et à traiter ces émotions, sans vous y attarder. Il vous conseille de déplacer votre attention de ce qui s'est mal passé vers ce qui peut encore être sauvé ou appris de la situation.",
    image: "/images/fiveofcups.jpeg",
  },
  {
    name: "Six de Coupes",
    description:
      "La carte du Six de Coupes suggère que vos transactions pourraient susciter un sentiment de nostalgie et d'influences passées. La carte indique que vos transactions pourraient être influencées par des expériences passées, des souvenirs ou des connexions. Elle pourrait indiquer un potentiel de revisiter des stratégies familières ou de rechercher des opportunités enracinées dans le passé.\n\nCependant, il est important de noter que la prédiction est basée sur une interprétation symbolique et non sur une garantie absolue de résultats spécifiques. Les résultats réels dépendront de divers facteurs, y compris les conditions du marché et vos décisions de trading.",
    image: "/images/sixofcups.jpeg",
  },
  {
    name: "Sept de Coupes",
    description:
      "La carte du Sept de Coupes suggère que le trader pourrait faire face à une période de confusion et de choix écrasants dans ses transactions. Le Sept de Coupes représente une multitude d'options et de possibilités, mais il met également en garde contre la nécessité de clarté et de discernement.\n\nElle suggère que le trader doit être prudent et éviter de se perdre dans des opportunités irréalistes ou trompeuses. Il est important pour le trader d'évaluer soigneusement chaque option, de rester concentré sur ses objectifs et de prendre des décisions éclairées pour naviguer à travers la complexité et tirer le meilleur parti de ses efforts de trading.",
    image: "/images/sevenofcups.jpeg",
  },
  {
    name: "Huit de Coupes",
    description:
      "La carte du Huit de Coupes suggère que vos transactions pourraient impliquer de laisser derrière vous certains investissements ou entreprises. Le Huit de Coupes représente une période de transition et le besoin de détachement émotionnel par rapport aux circonstances actuelles. Elle implique que vous pourriez ressentir le besoin de passer à autre chose à partir de certaines transactions ou stratégies d'investissement à la recherche de quelque chose de plus épanouissant ou aligné avec vos objectifs.\n\nLa carte vous conseille de faire confiance à vos instincts et d'écouter votre voix intérieure. Elle signifie qu'il pourrait être nécessaire de lâcher prise sur certaines opportunités ou investissements qui ne vous servent plus pour poursuivre de nouveaux chemins et expériences.\n\nGlobalement, la prédiction avec la carte du Huit de Coupes suggère un temps de changement et la nécessité d'explorer de nouvelles possibilités dans votre parcours de trading. Elle indique qu'en laissant derrière vous ce qui ne vous sert plus, vous pouvez trouver une plus grande satisfaction et croissance dans vos transactions futures.",
    image: "/images/eightofcups.jpeg",
  },
  {
    name: "Neuf de Coupes",
    description:
      "La carte du Neuf de Coupes suggère que vos transactions ont le potentiel de vous apporter satisfaction, contentement et un sentiment d'abondance. Cette carte représente des souhaits exaucés, une satisfaction émotionnelle et des résultats globalement positifs. Elle suggère que vos investissements pourraient mener à des résultats favorables, vous apportant joie et contentement.",
    image: "/images/nineofcups.jpeg",
  },
  {
    name: "Dix de Coupes",
    description:
      "La carte du Dix de Coupes suggère que vos transactions seraient positives et fructueuses. Le Dix de Coupes représente la satisfaction émotionnelle, l'harmonie et la joie. Elle suggère que vos investissements ont le potentiel de générer un sentiment de contentement et de satisfaction. Cette carte indique que vos transactions pourraient mener à des résultats réussis, non seulement en termes de gains financiers, mais aussi en termes de bonheur et de fulfillment global.",
    image: "/images/tenofcups.jpeg",
  },
  {
    name: "Page de Coupes",
    description:
      "La carte du Page de Coupes suggère que vos transactions pourraient offrir des opportunités de croissance émotionnelle et de nouveaux commencements. Le Page de Coupes représente l'enthousiasme juvénile, la créativité et l'émergence de nouvelles idées. Elle suggère qu'en abordant vos transactions avec un cœur ouvert et une volonté d'explorer des stratégies innovantes, vous pourriez découvrir des opportunités lucratives ou un potentiel inexploité dans le marché des cryptomonnaies.\n\nCette carte vous encourage à embrasser votre intuition, à nourrir vos passions et à être ouvert aux opportunités inattendues qui pourraient se présenter. Cependant, gardez à l'esprit que la carte du Page de Coupes ne garantit pas de résultats spécifiques, mais signifie plutôt un potentiel de développement émotionnel et créatif positif dans votre parcours de trading.",
    image: "/images/pageofcups.jpeg",
  },
  {
    name: "Chevalier de Coupes",
    description:
      "La carte du Chevalier de Coupes suggère que vos transactions pourraient être guidées par vos instincts émotionnels, et qu'il y a un potentiel pour des résultats positifs si vous suivez votre cœur et prenez des décisions basées sur votre intuition. Elle suggère qu'en combinant vos émotions avec la praticité et une approche équilibrée, vous pouvez naviguer avec succès sur le marché des cryptomonnaies.\n\nCependant, il est important de noter que la carte du Chevalier de Coupes ne garantit pas de résultats spécifiques. Les résultats réels dépendront de votre capacité à utiliser efficacement vos émotions, à prendre des décisions éclairées et à maintenir une approche rationnelle face à la volatilité du marché.",
    image: "/images/knightofcups.jpeg",
  },
  {
    name: "Reine de Coupes",
    description:
      "La carte de la Reine de Coupes suggère que vos investissements pourraient vous apporter satisfaction émotionnelle et succès intuitif. La Reine de Coupes représente l'intelligence émotionnelle, la compassion et la sagesse intuitive.\n\nElle suggère qu'en puisant dans votre intuition, en comprenant vos émotions et en prenant des décisions depuis un endroit d'empathie et de compassion, vous pouvez naviguer sur le marché des cryptomonnaies avec des résultats positifs. Faites confiance à vos instincts, restez équilibré émotionnellement et cultivez une compréhension approfondie du marché pour augmenter la probabilité de résultats favorables.",
    image: "/images/queenofcups.jpeg",
  },
  {
    name: "Roi de Coupes",
    description:
      "La carte du Roi de Coupes suggère que vos transactions pourraient aboutir à un équilibre émotionnel, une prise de décision intuitive et un succès financier potentiel. Le Roi de Coupes représente l'intelligence émotionnelle, la stabilité et une approche calme de vos investissements. Elle indique qu'en puisant dans votre intuition et en maintenant un état d'esprit équilibré, vous avez le potentiel de prendre des décisions avisées et d'obtenir des résultats positifs sur le marché des cryptomonnaies.",
    image: "/images/kingofcups.jpeg",
  },
  {
    name: "As de Pentacles",
    description:
      "La carte de l'As de Pentacles suggère que vos transactions ont le potentiel d'offrir de nouvelles opportunités financières et une abondance matérielle. L'As de Pentacles représente le début de la prospérité et la manifestation de la richesse. Elle suggère que vos investissements pourraient conduire à des résultats favorables, tels que la stabilité financière et la croissance. Cette carte vous encourage à saisir ces opportunités et à prendre des décisions pratiques et ancrées dans la réalité dans vos activités de trading.\n\n Cependant, il est important de noter que la carte ne garantit pas de résultats spécifiques, et le résultat réel dépendra de divers facteurs tels que les conditions du marché et vos propres actions. Abordez vos transactions avec un esprit concentré, profitez des opportunités potentielles et prenez des décisions éclairées pour augmenter la probabilité de résultats positifs.",
    image: "/images/aceofpentacles.jpeg",
  },
  {
    name: "Deux de Pentacles",
    description:
      "La carte du Deux de Pentacles suggère que vos transactions pourraient impliquer de jongler avec plusieurs responsabilités financières et de trouver l'harmonie en dépit des circonstances changeantes. Cette carte indique que vous devrez gérer différents aspects de vos investissements, vous adapter aux fluctuations du marché et prendre des décisions pratiques pour maintenir la stabilité. La prédiction implique que votre capacité à trouver un équilibre et à gérer vos ressources judicieusement sera essentielle pour naviguer avec succès sur le marché des cryptomonnaies.",
    image: "/images/twoofpentacles.jpeg",
  },
  {
    name: "Trois de Pentacles",
    description:
      "La carte du Trois de Pentacles suggère que vos transactions pourraient être positives. Le Trois de Pentacles représente la collaboration, les compétences et le succès dans vos efforts. Elle suggère que vos transactions ont le potentiel d'être fructueuses, surtout si vous êtes prêt à travailler avec d'autres et à utiliser votre expertise.\n\n Cette carte signifie l'importance du travail d'équipe, de l'attention aux détails et du perfectionnement de votre savoir-faire. Elle indique que vos efforts pourraient être reconnus, menant à des récompenses et à des progrès dans votre parcours de trading. Globalement, la prédiction avec cette carte serait que vos transactions ont le potentiel de succès et de prospérité.",
    image: "/images/threeofpentacles.jpeg",
  },
  {
    name: "Quatre de Pentacles",
    description:
      "La carte du Quatre de Pentacles représente une tendance à conserver les ressources et à maintenir une position financière sécurisée. Elle implique que vous pourriez être enclin à être prudent et réticent à prendre des risques dans vos activités de trading. La carte vous conseille de privilégier la stabilité, la sécurité financière et la préservation de vos actifs.\n\n Cependant, elle indique également un besoin potentiel de trouver un équilibre entre conserver ce que vous avez et explorer de nouvelles opportunités de croissance. Il est suggéré que, bien qu'il soit important d'être attentif à la stabilité financière, être trop rigide ou protecteur pourrait freiner votre potentiel de gains plus importants. Il est donc recommandé de considérer un équilibre entre la préservation de vos ressources et la prise de risques calculés pour maximiser vos résultats de trading.",
    image: "/images/fourofpentacles.jpeg",
  },
  {
    name: "Cinq de Pentacles",
    description:
      "La carte du Cinq de Pentacles suggère que vos transactions pourraient indiquer des défis financiers ou des difficultés. Le Cinq de Pentacles représente une période de pression financière, de pénurie ou de sentiment d'exclusion. Elle indique qu'il pourrait y avoir des pertes ou des revers dans vos investissements, et vous pourriez éprouver un sentiment d'instabilité financière.\n\n Cependant, il est important de noter que le Tarot n'est pas un prédicteur absolu de l'avenir, et les résultats peuvent être influencés par divers facteurs. Bien que la carte du Cinq de Pentacles suggère des défis financiers potentiels, il est toujours en votre pouvoir de prendre des mesures proactives, de chercher des conseils et d'adapter vos stratégies pour améliorer la situation.",
    image: "/images/fiveofpentacles.jpeg",
  },
  {
    name: "Six de Pentacles",
    description:
      "La carte du Six de Pentacles suggère que vos transactions pourraient connaître un échange juste et équilibré. Le Six de Pentacles représente la générosité, la réciprocité et le flux de ressources. Elle indique que vos transactions ont le potentiel de conduire à des résultats mutuellement bénéfiques, où vous pourriez recevoir du soutien ou de l'aide d'autres personnes tout en partageant votre abondance avec ceux dans le besoin.\n\n Cette carte indique que vos investissements pourraient mener à une distribution harmonieuse et équitable de la richesse. Cependant, il est important de noter que le Six de Pentacles ne garantit pas de résultats spécifiques. Les résultats réels dépendront de divers facteurs, y compris vos actions, les conditions du marché et vos interactions avec les autres. Abordez vos transactions avec un esprit de justice, de générosité et d'intégrité pour augmenter la probabilité de résultats positifs et mutuellement bénéfiques.",
    image: "/images/sixofpentacles.jpeg",
  },
  {
    name: "Sept de Pentacles",
    description:
      "La carte du Sept de Pentacles suggère que vos transactions pourraient nécessiter une période d'évaluation et de patience. Le Sept de Pentacles représente un moment de réflexion, d'évaluation de vos investissements et d'attente des résultats. Elle indique que vos transactions pourraient nécessiter une approche patiente, permettant à vos investissements de croître et de se développer avec le temps.\n\n La carte vous conseille de revoir vos progrès, de faire les ajustements nécessaires et de faire confiance au processus de vos investissements. Bien qu'elle ne fournisse pas de résultats spécifiques, elle suggère qu'avec une évaluation attentive et de la patience, vos transactions ont le potentiel d'apporter des résultats positifs à long terme.",
    image: "/images/sevenofpentacles.jpeg",
  },
  {
    name: "Huit de Pentacles",
    description:
      "La carte du Huit de Pentacles suggère que vos transactions, en tant que trader de crypto-monnaies, pourraient entraîner des efforts concentrés, le développement de compétences et des gains financiers potentiels.\n\n Le Huit de Pentacles représente le dévouement, le travail acharné et le perfectionnement de votre expertise. Elle indique qu'en mettant un effort constant, en vous concentrant sur l'amélioration de vos compétences et en restant engagé dans vos transactions, vous avez le potentiel d'atteindre le succès et la croissance financière sur le marché des cryptomonnaies.",
    image: "/images/eightofpentacles.jpeg",
  },
  {
    name: "Neuf de Pentacles",
    description:
      "La carte du Neuf de Pentacles suggère que vos transactions ont le potentiel d'apporter abondance financière et succès indépendant. Le Neuf de Pentacles représente une période de prospérité, d'autosuffisance et de récolte des fruits de votre travail. Elle indique que vos investissements pourraient aboutir à une stabilité financière et un sentiment d'accomplissement personnel.\n\n Cette carte vous encourage à faire confiance à vos capacités, à maintenir une approche disciplinée et à profiter des fruits de votre travail. Elle suggère que vos transactions pourraient conduire à un résultat favorable avec un potentiel de croissance financière et de sécurité.",
    image: "/images/nineofpentacles.jpeg",
  },
  {
    name: "Dix de Pentacles",
    description:
      "La carte du Dix de Pentacles suggère que vos transactions ont le potentiel d'apporter une stabilité financière substantielle et une richesse à long terme. Le Dix de Pentacles représente une culmination d'abondance matérielle, de prospérité et de richesse générationnelle. Elle indique que vos investissements pourraient générer des rendements significatifs et contribuer à une solide fondation financière pour vous-même et éventuellement pour les générations futures. Cette carte indique que vos transactions ont le potentiel de créer un résultat durable et prospère, vous apportant sécurité financière et succès sur le marché des cryptomonnaies.",
    image: "/images/tenofpentacles.jpeg",
  },
  {
    name: "Page de Pentacles",
    description:
      "La carte du Page de Pentacles suggère que vos transactions en tant que trader de crypto-monnaies pourraient offrir un potentiel pour de nouvelles opportunités financières et une croissance. Le Page de Pentacles représente une personne jeune et ambitieuse, désireuse d'apprendre et d'appliquer ses compétences de manière pratique.\n\n Elle suggère qu'en étant assidu, concentré et ouvert à l'apprentissage, vos transactions ont le potentiel d'apporter des résultats positifs, tels que de nouvelles perspectives d'investissement ou des opportunités lucratives. La carte vous encourage à aborder vos transactions avec une mentalité de débutant, à chercher des connaissances et à être prêt à fournir l'effort nécessaire pour atteindre vos objectifs financiers.",
    image: "/images/pageofpentacles.jpeg",
  },
  {
    name: "Chevalier de Pentacles",
    description:
      "La carte du Chevalier de Pentacles suggère qu'avec vos transactions, vous pouvez vous attendre à des progrès constants et fiables. Le Chevalier de Pentacles représente une approche méthodique et disciplinée, suggérant que vos investissements généreront une croissance progressive et de la stabilité. Cette carte indique qu'en vous concentrant sur des stratégies à long terme, en étant diligent dans vos recherches et en adoptant une approche patiente et pratique, vous avez le potentiel d'atteindre une stabilité financière et des résultats tangibles dans vos transactions.",
    image: "/images/knightofpentacles.jpeg",
  },
  {
    name: "Reine de Pentacles",
    description:
      "La carte de la Reine de Pentacles suggère que vos investissements apporteront probablement stabilité, abondance et succès financier. La Reine de Pentacles représente une personne ou une énergie associée à la praticité, à la protection et à la richesse matérielle. Elle indique que vos efforts de trading ont le potentiel de générer des résultats positifs, de la croissance et une base solide pour vos objectifs financiers. Elle suggère que vous pourriez connaître des retours fructueux et un sentiment de sécurité dans vos investissements.",
    image: "/images/queenofpentacles.jpeg",
  },
  {
    name: "Roi de Pentacles",
    description:
      "La carte du Roi de Pentacles suggère que vos transactions sont susceptibles de conduire à du succès, à une stabilité financière et à une abondance. Le Roi de Pentacles représente la richesse, la maîtrise et la praticité. Il signifie que vos investissements ont le potentiel d'apporter des résultats fructueux et des rendements solides. Cette carte suggère que vous avez les compétences, les connaissances et l'expertise nécessaires pour prendre des décisions financières avisées sur le marché des cryptomonnaies. Elle vous conseille d'aborder vos transactions avec un état d'esprit pratique, de vous concentrer sur des gains à long terme et d'utiliser vos ressources efficacement. Globalement, la prédiction est que vos transactions ont une forte probabilité de mener à des résultats prospères.",
    image: "/images/kingofpentacles.jpeg",
  },
  {
    name: "As d'Épées",
    description:
      "La carte de l'As d'Épées suggère que vos transactions ont le potentiel d'apporter succès, clarté et percées. L'As d'Épées représente un nouveau départ, le pouvoir intellectuel et la capacité à prendre des décisions décisives et stratégiques. Elle indique que vos activités de trading pourraient être marquées par une grande perspicacité, une pensée claire et un fort sentiment de but.\n\n Cette carte signifie que vous avez l'acuité mentale et la détermination nécessaires pour surmonter les défis et atteindre vos objectifs sur le marché des cryptomonnaies. Elle vous conseille de mettre à profit votre intelligence, d'embrasser de nouvelles opportunités et de prendre des risques calculés pour optimiser vos résultats. Cependant, il est important de se rappeler que les lectures de tarot sont interprétatives, et les résultats réels de vos transactions dépendront de divers facteurs et de vos propres actions sur le marché.",
    image: "/images/aceofswords.jpeg",
  },
  {
    name: "Deux d'Épées",
    description:
      "La carte du Deux d'Épées représente une situation où vous pourriez vous sentir bloqué, incapable d'avancer ou de prendre des décisions claires. Elle suggère une période d'incertitude et d'options conflictuelles.\n\n Cette carte indique que vous êtes actuellement confronté à un dilemme dans vos décisions de trading. Cela pourrait être lié à des informations contradictoires, à la volatilité du marché ou à une incertitude quant à la voie à suivre. La carte vous conseille de peser soigneusement vos options, de recueillir davantage d'informations et de trouver un moyen de concilier les facteurs opposés avant de prendre des décisions importantes en matière de trading.\n\n Cependant, il est important de noter que la carte du Deux d'Épées ne fournit pas de résultat définitif. Le résultat réel de vos transactions dépendra de votre capacité à confronter la décision en cours, à rechercher la clarté et à faire des choix éclairés. La prédiction du Tarot sert de rappel pour aborder les défis et chercher une résolution pour avancer dans votre parcours de trading.",
    image: "/images/twoofswords.jpeg",
  },
  {
    name: "Trois d'Épées",
    description:
      "La carte du Trois d'Épées suggère que dans vos transactions, vous pourriez traverser une période de chagrin, de douleur ou de difficultés. Cette carte indique que vos investissements pourraient faire face à des défis ou à des revers qui pourraient potentiellement entraîner un tourment émotionnel ou des pertes. Elle vous conseille de vous préparer à des circonstances difficiles et d'aborder vos transactions avec prudence et réflexion.\n\n Cependant, il est important de se rappeler que les lectures de tarot sont subjectives et doivent être prises comme des orientations plutôt que comme une prédiction définitive de l'avenir. Il est toujours sage de prendre des décisions basées sur votre propre recherche, analyse et évaluation des risques sur le marché des cryptomonnaies.",
    image: "/images/threeofswords.jpeg",
  },
  {
    name: "Quatre d'Épées",
    description:
      "La carte du Quatre d'Épées suggère que vous pourriez traverser une période de repos, de récupération et de pause dans le trading actif. Elle indique que la meilleure chose à faire en ce moment pourrait être de prendre du recul et de vous accorder du temps pour l'introspection et le ressourcement.\n\n La carte suggère que pousser vos transactions en avant pourrait ne pas donner les résultats escomptés, et il serait préférable de vous concentrer sur le soin de vous et le rétablissement d'un équilibre avant de reprendre vos activités de trading.",
    image: "/images/fourofswords.jpeg",
  },
  {
    name: "Cinq d'Épées",
    description:
      "La carte du Cinq d'Épées suggère des conflits potentiels, une compétition ou des défis dans vos transactions. La carte indique que vous pourriez rencontrer des situations où il est important de rester prudent face à la tromperie, la manipulation ou une concurrence malsaine sur le marché des cryptomonnaies. Elle vous conseille de faire preuve de stratégie, de maintenir un sens de l'intégrité et d'évaluer soigneusement vos décisions pour naviguer à travers ces circonstances difficiles.",
    image: "/images/fiveofswords.jpeg",
  },
  {
    name: "Six d'Épées",
    description:
      "La carte du Six d'Épées suggère que vos transactions apporteront une période de transition, vous éloignant des difficultés vers des eaux plus calmes. La carte indique qu'en prenant des décisions stratégiques et en laissant derrière vous des situations difficiles, vous pouvez naviguer vers une expérience de trading plus stable et positive. Cela indique une amélioration potentielle dans votre parcours de trading, où vous pourriez trouver une navigation plus fluide et un sentiment de soulagement des obstacles précédents.",
    image: "/images/sixofswords.jpeg",
  },
  {
    name: "Sept d'Épées",
    description:
      "La carte du Sept d'Épées suggère que vos transactions pourraient impliquer un élément de tromperie, de risque ou de perte potentielle. La carte indique un besoin de prudence et de vigilance, car il pourrait y avoir des agendas cachés, des pratiques non éthiques ou des risques de vol dans l'environnement de trading. Elle vous conseille de faire attention à vos actions, de mener des recherches approfondies et de prendre des mesures appropriées pour protéger vos actifs et vos intérêts. Le Sept d'Épées sert de rappel pour rester sceptique face aux opportunités trop prometteuses ou douteuses et pour maintenir une vigilance aiguë face aux risques potentiels dans vos activités de trading.",
    image: "/images/sevenofswords.jpeg",
  },
  {
    name: "Huit d'Épées",
    description:
      "La carte du Huit d'Épées suggère que vos transactions pourraient éprouver un sentiment de restriction ou de piège dans vos efforts d'investissement. Elle signifie des obstacles potentiels, des limitations ou des restrictions auto-imposées qui pourraient entraver votre progression ou votre processus décisionnel.\n\n Cette carte vous conseille d'examiner toute croyance ou peur auto-limitante qui pourrait vous retenir. Elle vous incite à remettre en question ces contraintes et à chercher des moyens de vous libérer des limitations perçues. En adoptant une approche proactive, en recherchant des perspectives alternatives et en surmontant le doute de soi, vous pouvez surmonter les défis et trouver un chemin vers une plus grande liberté et succès dans vos transactions.\n\n En résumé, la présence de la carte du Huit d'Épées indique un potentiel sentiment de piège ou de restriction dans votre parcours de trading. Cependant, elle encourage également à confronter et à surmonter ces limitations en explorant de nouvelles stratégies et en obtenant une perspective fraîche, conduisant finalement à un chemin de plus grande liberté et succès.",
    image: "/images/eightofswords.jpeg",
  },
  {
    name: "Neuf d'Épées",
    description:
      "La carte du Neuf d'Épées suggère que vos investissements pourraient entraîner des sentiments de préoccupation, d'anxiété ou de stress. La carte sert de signe de prudence pour être conscient des défis ou difficultés potentiels. Cependant, il est important de se rappeler que les lectures de tarot fournissent des conseils, non des résultats fixes. En restant calme, en cherchant du soutien et en prenant des décisions éclairées, vous pouvez naviguer à travers les défis et travailler vers des résultats plus positifs.",
    image: "/images/nineofswords.jpeg",
  },
  {
    name: "Dix d'Épées",
    description:
      "La carte du Dix d'Épées suggère que vos transactions pourraient rencontrer des défis ou des revers importants. Le Dix d'Épées représente un sentiment de défaite, de trahison ou d'atteinte d'un point bas dans une situation. Elle signifie que vos investissements pourraient faire face à des obstacles ou à des résultats négatifs inattendus.\n\n Cependant, il est important de se rappeler que les prédictions du Tarot ne sont pas absolues et peuvent être influencées par divers facteurs. Il est conseillé de chercher d'autres conseils ou d'explorer différentes stratégies pour atténuer les risques potentiels et naviguer dans les périodes difficiles de votre parcours de trading.",
    image: "/images/tenofswords.jpeg",
  },
  {
    name: "Page d'Épées",
    description:
      "La carte du Page d'Épées suggère que vos transactions nécessiteront une analyse minutieuse, une planification stratégique et un esprit alerte. Vous devriez rester informé des tendances du marché, être proactif dans votre prise de décision et vous adapter rapidement aux changements. En restant curieux, ouvert d'esprit et prêt à prendre des risques calculés, vous pouvez augmenter vos chances de succès sur le marché des cryptomonnaies.",
    image: "/images/pageofswords.jpeg",
  },
  {
    name: "Chevalier d'Épées",
    description:
      "La carte du Chevalier d'Épées suggère que vos transactions pourraient impliquer une période d'action rapide, d'affirmation de soi et de prise de risques. Le Chevalier d'Épées représente une énergie ambitieuse et déterminée, indiquant que vous pourriez poursuivre vos transactions avec détermination et une approche audacieuse.\n\n Cependant, il est important d'exercer de la prudence et de veiller également à considérer les risques et les conséquences potentiels associés à une prise de décision impulsive. La carte vous conseille de maintenir un équilibre entre l'action rapide et la réflexion soigneuse pour réussir dans vos efforts de trading.",
    image: "/images/knightofswords.jpeg",
  },
  {
    name: "Reine d'Épées",
    description:
      "La carte de la Reine d'Épées suggère que vos transactions nécessiteront une analyse minutieuse, une stratégie et le maintien d'une approche rationnelle et objective. La Reine d'Épées représente une intellect aigu, une communication claire et une concentration sur la logique et la raison. Cette carte indique que le succès dans vos transactions dépendra de votre capacité à prendre des décisions éclairées basées sur des recherches approfondies et une pensée critique.\n\n La Reine d'Épées vous encourage à aborder vos transactions avec une mentalité équilibrée, en vous appuyant sur des faits et des données plutôt que sur des émotions. En utilisant vos compétences analytiques et en maintenant une approche disciplinée, vous avez le potentiel de faire des choix judicieux et d'atteindre des résultats favorables dans vos investissements.",
    image: "/images/queenofswords.jpeg",
  },
  {
    name: "Roi d'Épées",
    description:
      "La carte du Roi d'Épées suggère que vos transactions seront probablement marquées par une période de prise de décision stratégique, de rationalité et de prouesse intellectuelle. Le Roi d'Épées représente une mentalité forte et analytique, indiquant que vos transactions pourraient être influencées par une approche logique et calculée. Il suggère que vous avez le potentiel de faire des choix informés et décisifs dans vos investissements, en vous appuyant sur vos connaissances et votre expertise.\n\n Cette carte signifie également l'importance de la communication claire et de l'affirmation de soi dans vos efforts de trading. En résumé, la prédiction du Tarot avec la carte du Roi d'Épées suggère que vos transactions seront guidées par la logique, la pensée stratégique et une prise de décision efficace.",
    image: "/images/kingofswords.jpeg",
  },
  {
    name: "As de Bâtons",
    description:
      "La carte de l'As de Bâtons suggère que vos transactions ont le potentiel d'apporter de nouvelles opportunités, créativité et croissance. L'As de Bâtons représente l'étincelle d'inspiration, l'esprit entrepreneurial et l'initiation de projets réussis. Elle signifie que vos activités de trading peuvent mener à des perspectives excitantes, des idées innovantes et la possibilité de rendements significatifs. Elle vous encourage à prendre des actions audacieuses et décisives, à exploiter votre enthousiasme et à saisir les opportunités qui se présentent. Cette carte indique que votre parcours de trading promet des résultats réussis.",
    image: "/images/aceofwands.jpeg",
  },
  {
    name: "Deux de Bâtons",
    description:
      "La carte du Deux de Bâtons suggère que vos transactions ont le potentiel de succès futur et d'expansion. Le Deux de Bâtons représente la planification, la vision des opportunités et la prise de mesures audacieuses vers vos objectifs. Il suggère que vos transactions pourraient aboutir à des résultats positifs, une croissance et de nouvelles possibilités. Il vous conseille de saisir les opportunités, de faire confiance à vos instincts et de prendre des risques calculés pour atteindre les résultats souhaités. Cependant, il est important de noter que le résultat réel dépendra de vos actions, décisions et conditions du marché. Adoptez le message de confiance et de pensée proactive de la carte pour naviguer sur le marché des cryptomonnaies.",
    image: "/images/twoofwands.jpeg",
  },
  {
    name: "Trois de Bâtons",
    description:
      "La carte du Trois de Bâtons suggère que vos transactions ont le potentiel d'expansion, de croissance et de succès. Le Trois de Bâtons signifie une approche proactive, une vision stratégique et une préparation pour explorer de nouveaux horizons dans vos investissements. Il suggère que vos transactions pourraient mener à des opportunités de succès à long terme, tant sur le plan financier que personnel. Cependant, il est important de noter que les résultats réels dépendront de votre capacité à saisir ces opportunités, à prendre des décisions éclairées et à vous adapter aux conditions changeantes du marché.",
    image: "/images/threeofwands.jpeg",
  },
  {
    name: "Quatre de Bâtons",
    description:
      "La carte du Quatre de Bâtons suggère qu'avec vos transactions, vous pouvez vous attendre à une période de stabilité, de succès et de célébration. Le Quatre de Bâtons représente une période d'accomplissement, d'harmonie et de fondation solide dans vos investissements. Il suggère que vos transactions ont le potentiel d'apporter des résultats positifs, une stabilité financière et un sentiment d'accomplissement. Cette carte indique que vos efforts sur le marché des cryptomonnaies seront probablement récompensés et que vous pourriez connaître une période de résultats fructueux. En somme, la prédiction est que vos transactions ont le potentiel d'aboutir à des résultats favorables et prospères.",
    image: "/images/fourofwands.jpeg",
  },
  {
    name: "Cinq de Bâtons",
    description:
      "La carte du Cinq de Bâtons suggère que vos transactions pourraient rencontrer de la compétition, des conflits ou des obstacles dans votre parcours de trading. La carte indique une période de défis et de désaccords au sein du marché ou parmi les autres traders. Cependant, il est important de se rappeler que la carte du Cinq de Bâtons ne garantit pas des résultats spécifiques. Les résultats réels dépendront de votre capacité à naviguer dans le paysage concurrentiel, à surmonter les conflits et à trouver des moyens de vous démarquer parmi les défis. Abordez vos transactions avec résilience, réflexion stratégique et volonté d'adaptation pour augmenter les chances de résultats favorables.",
    image: "/images/fiveofwands.jpeg",
  },
  {
    name: "Six de Bâtons",
    description:
      "La carte du Six de Bâtons suggère que vos transactions seront réussies et vous apporteront reconnaissance et victoire. Le Six de Bâtons symbolise le triomphe, l'accomplissement et la reconnaissance publique pour vos efforts. Il suggère que vos transactions ont le potentiel d'aboutir à des résultats positifs et d'être saluées par les autres. En somme, la prédiction indique que vos investissements ont de fortes chances de réussir et de vous apporter des récompenses significatives.",
    image: "/images/sixofwands.jpeg",
  },
  {
    name: "Sept de Bâtons",
    description:
      "La carte du Sept de Bâtons suggère que vous serez confronté à des défis et à une compétition sur le marché des cryptomonnaies. La carte indique que vous devrez défendre votre position et vous affirmer face aux obstacles potentiels. Cependant, elle implique également qu'avec détermination, résilience et prise de décision stratégique, vous avez la capacité de surmonter ces défis et de vous en sortir victorieux.",
    image: "/images/sevenofwands.jpeg",
  },
  {
    name: "Huit de Bâtons",
    description:
      "La carte du Huit de Bâtons suggère que vos transactions seront marquées par une action rapide et décisive. Le Huit de Bâtons représente une période de progrès rapide, de momentum et d'opportunités qui se présentent à vous. Il suggère que vos transactions ont le potentiel de se déplacer rapidement, ce qui pourrait entraîner des résultats profitables.\n\n Cette carte vous encourage à saisir le moment et à agir rapidement, car elle signifie des conditions favorables et un rythme accéléré sur le marché des cryptomonnaies. Cependant, il est important de noter que l'interprétation des cartes de tarot est subjective, et les résultats réels de vos transactions dépendront de divers facteurs. Abordez vos transactions avec attention, prenez des décisions éclairées et profitez des opportunités qui se présentent pour augmenter les chances de résultats positifs.",
    image: "/images/eightofwands.jpeg",
  },
  {
    name: "Neuf de Bâtons",
    description:
      "La carte du Neuf de Bâtons suggère que vos transactions pourraient rencontrer des défis et des obstacles. Le Neuf de Bâtons représente la résilience, la persévérance et la nécessité de rester vigilant face à l'adversité. Il indique que vous devrez protéger vos investissements, être préparé à d'éventuels revers et rester déterminé pour surmonter les obstacles qui se présenteront. \n\n Malgré les défis, la carte vous encourage à rester engagé envers vos objectifs et à avoir confiance en votre capacité à naviguer à travers les difficultés. En maintenant votre résilience et votre adaptabilité, vous pouvez augmenter la probabilité de surmonter les obstacles et d'obtenir des résultats positifs dans vos transactions.",
    image: "/images/nineofwands.jpeg",
  },
  {
    name: "Dix de Bâtons",
    description:
      "La carte du Dix de Bâtons suggère que vos transactions pourraient entraîner un lourd fardeau ou une charge de travail écrasante. Elle indique que vous pourriez rencontrer des défis et des responsabilités qui pourraient devenir épuisants et affecter votre bien-être. La carte vous conseille d'être attentif à ne pas en faire trop et de trouver des moyens de gérer le stress qui pourrait découler de vos activités de trading. En maintenant une approche équilibrée et en cherchant du soutien lorsque nécessaire, vous pourrez mieux gérer les exigences du trading.",
    image: "/images/tenofwands.jpeg",
  },
  {
    name: "Page de Bâtons",
    description:
      "La carte du Page de Bâtons suggère que votre trading sera probablement marqué par de nouvelles opportunités où vous aurez enthousiasme et potentiel de croissance. Le Page de Bâtons représente un nouveau départ, une énergie créative et une volonté d'explorer de nouvelles avenues. Il suggère que vos transactions peuvent apporter des perspectives excitantes et un sentiment de passion dans votre parcours d'investissement. Cette carte vous encourage à embrasser votre enthousiasme, à prendre des risques calculés et à être ouvert à des approches innovantes. Elle signifie qu'en restant proactif, adaptable et aventurier dans vos décisions de trading, vous pourriez découvrir des voies prometteuses pour le succès.",
    image: "/images/pageofwands.jpeg",
  },
  {
    name: "Chevalier de Bâtons",
    description:
      "La carte du Chevalier de Bâtons suggère que vos transactions seront caractérisées par passion, énergie et désir d'action. Le Chevalier de Bâtons signifie une période de prise de mesures audacieuses et assertives en poursuivant vos objectifs. Il suggère que vous connaîtrez probablement des opportunités de croissance et d'expansion dans vos activités de trading. Cependant, il est important d'aborder vos transactions avec prudence et de maintenir un équilibre entre enthousiasme et planification soignée. Le Chevalier de Bâtons vous encourage à canaliser votre énergie et votre passion dans des actions ciblées et stratégiques pour augmenter les chances de résultats positifs.",
    image: "/images/knightofwands.jpeg",
  },
  {
    name: "Reine de Bâtons",
    description:
      "La carte de la Reine de Bâtons suggère que vos transactions seront probablement marquées par des résultats confiants et audacieux. La Reine de Bâtons représente une personne forte et déterminée qui prend les choses en main et dégage des qualités de leadership. Elle suggère que vos investissements peuvent réussir grâce à votre capacité à saisir les opportunités, à faire confiance à vos instincts et à prendre des actions décisives. Cette carte indique que vous avez le potentiel de faire des avancées significatives sur le marché des cryptomonnaies en étant passionné, assertif et confiant dans vos décisions de trading.",
    image: "/images/queenofwands.jpeg",
  },
  {
    name: "Roi de Bâtons",
    description:
      "La carte du Roi de Bâtons suggère que vos transactions seront marquées par l'ambition, l'énergie et le succès. Le Roi de Bâtons représente un leader dynamique et confiant qui possède des compétences entrepreneuriales et une mentalité visionnaire. Cette carte suggère que vos transactions ont le potentiel d'être audacieuses et rentables. Elle signifie qu'en exploitant votre passion, en prenant des mesures décisives et en utilisant votre créativité, vous pouvez atteindre un succès significatif dans vos investissements.\n\n Cependant, il est important de se rappeler que les lectures de tarot sont subjectives et doivent être considérées comme des orientations plutôt que des prédictions absolues. Les résultats réels dépendront de vos actions, des conditions du marché et d'autres facteurs. Abordez vos transactions avec confiance, prenez des risques calculés et utilisez vos compétences visionnaires pour augmenter les chances de résultats favorables.",
    image: "/images/kingofwands.jpeg",
  },
];

module.exports = tarotDeck;