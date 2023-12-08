<script setup lang="ts">
import { ref } from 'vue';
let questionList = [
    { Question: "Qu'est-ce qu'un écosystème ?", Response1: "Un groupe d'animaux domestiques", Response2: "Un ensemble d'organismes interagissant avec leur environnement", Response3: "Un jardin botanique", good: "Un ensemble d'organismes interagissant avec leur environnement", infos: "Un écosystème est une communauté d'organismes vivants interagissant avec leur environnement non vivant." },
    { Question: "Quelle est la principale source d'énergie renouvelable utilisée pour produire de l'électricité ?", Response1: "Énergie nucléaire", Response2: "Énergie solaire", Response3: "Énergie fossile", good: "Énergie solaire", infos: "L'énergie solaire est une source d'énergie renouvelable provenant du soleil et convertie en électricité." },
    { Question: "Quelle action contribue le plus à la déforestation ?", Response1: "Plantation d'arbres", Response2: "Exploitation minière", Response3: "Coupe d'arbres pour le bois et l'agriculture", good: "Coupe d'arbres pour le bois et l'agriculture", infos: "La coupe d'arbres pour le bois et la conversion des forêts en terres agricoles sont des causes majeures de déforestation." },
    { Question: "Quel est le principal problème associé aux déchets plastiques dans les océans ?", Response1: "Augmentation du niveau de la mer", Response2: "Pollution de l'eau et des écosystèmes marins", Response3: "Diminution de la biodiversité marine", good: "Pollution de l'eau et des écosystèmes marins", infos: "Les déchets plastiques dans les océans entraînent la pollution de l'eau et menacent la vie marine." },
    { Question: "Quel phénomène naturel contribue à la régulation du climat en absorbant le dioxyde de carbone de l'atmosphère ?", Response1: "Éruption volcanique", Response2: "Photosynthèse des plantes", Response3: "Érosion du sol", good: "Photosynthèse des plantes", infos: "La photosynthèse est le processus par lequel les plantes absorbent le dioxyde de carbone et libèrent de l'oxygène, contribuant ainsi à la régulation du climat." },
    { Question: "Qu'est-ce que l'empreinte carbone mesure principalement ?", Response1: "La taille des chaussures", Response2: "L'impact environnemental lié aux émissions de gaz à effet de serre", Response3: "La consommation d'eau", good: "L'impact environnemental lié aux émissions de gaz à effet de serre", infos: "L'empreinte carbone évalue la quantité totale de gaz à effet de serre émis directement ou indirectement par une personne, une organisation ou un produit." },
    { Question: "Quelle est la principale source de pollution de l'air dans les zones urbaines ?", Response1: "Émissions industrielles", Response2: "Circulation automobile", Response3: "Utilisation de poêles à bois", good: "Circulation automobile", infos: "Les véhicules à moteur, en particulier ceux fonctionnant aux combustibles fossiles, contribuent significativement à la pollution de l'air urbain." },
    { Question: "Quelle est la principale menace pour les abeilles, essentielles à la pollinisation des cultures ?", Response1: "Utilisation intensive de pesticides", Response2: "Déforestation", Response3: "Changement climatique", good: "Utilisation intensive de pesticides", infos: "Les pesticides peuvent avoir des effets néfastes sur les abeilles, mettant en péril leur rôle crucial dans la pollinisation." },
    { Question: "Qu'est-ce que la biodiversité ?", Response1: "La variété des écosystèmes", Response2: "La variabilité génétique au sein d'une espèce", Response3: "La diversité des espèces vivantes", good: "La diversité des espèces vivantes", infos: "La biodiversité fait référence à la variété des espèces de plantes, d'animaux et de micro-organismes, ainsi qu'à leurs interactions au sein d'un écosystème." },
    { Question: "Quel terme désigne la perte irréversible d'une espèce de la planète ?", Response1: "Extinction", Response2: "Endémisme", Response3: "Adaptation", good: "Extinction", infos: "L'extinction se produit lorsque toutes les populations d'une espèce disparaissent définitivement de la Terre." },
    { Question: "Quel est le principal gaz à effet de serre relâché par l'élevage du bétail ?", Response1: "Méthane (CH4)", Response2: "Oxygène (O2)", Response3: "Azote (N2O)", good: "Méthane (CH4)", infos: "Le méthane est un puissant gaz à effet de serre émis par le système digestif des animaux ruminants." },
    { Question: "Quelle pratique agricole contribue à la conservation des sols et à la réduction de l'érosion ?", Response1: "Labourage intensif", Response2: "Rotation des cultures", Response3: "Utilisation excessive d'engrais", good: "Rotation des cultures", infos: "La rotation des cultures aide à prévenir l'épuisement des nutriments du sol et à réduire l'érosion." },
    { Question: "Quel terme décrit le processus de conversion des déchets en compost pour enrichir le sol ?", Response1: "Incinération", Response2: "Recyclage", Response3: "Compostage", good: "Compostage", infos: "Le compostage est une méthode écologique de traitement des déchets organiques pour produire un amendement du sol riche en nutriments." },
    { Question: "Quel type d'énergie provient de la chaleur interne de la Terre ?", Response1: "Énergie éolienne", Response2: "Énergie géothermique", Response3: "Énergie hydroélectrique", good: "Énergie géothermique", infos: "L'énergie géothermique utilise la chaleur emmagasinée sous la surface de la Terre pour produire de l'électricité." },
    { Question: "Quel est le terme utilisé pour décrire la variété des espèces vivant dans un écosystème particulier ?", Response1: "Biodiversité", Response2: "Éclectisme", Response3: "Hétérogénéité", good: "Biodiversité", infos: "La biodiversité fait référence à la variété des espèces vivantes dans un écosystème donné." },
    { Question: "Quelle est la principale cause du trou dans la couche d'ozone ?", Response1: "Émissions de gaz à effet de serre", Response2: "Utilisation de réfrigérants chlorofluorocarbones (CFC)", Response3: "Activités volcaniques", good: "Utilisation de réfrigérants chlorofluorocarbones (CFC)", infos: "Les CFC dégradent la couche d'ozone, contribuant au trou dans la couche d'ozone." },
    { Question: "Quel terme décrit la conversion d'une zone naturelle en terrain urbain ou agricole ?", Response1: "Urbanisation", Response2: "Déforestation", Response3: "Régénération", good: "Urbanisation", infos: "L'urbanisation est le processus de transformation de zones naturelles en zones urbaines." },
    { Question: "Quelle est la principale source de contamination des océans par les plastiques ?", Response1: "Déchets industriels", Response2: "Déchets ménagers", Response3: "Déversements pétroliers", good: "Déchets ménagers", infos: "Les déchets plastiques provenant des activités humaines, en particulier les déchets ménagers, contaminent les océans." },
    { Question: "Quel est le principal avantage des emballages biodégradables par rapport aux emballages en plastique traditionnels ?", Response1: "Ils se décomposent plus rapidement", Response2: "Ils sont moins chers à produire", Response3: "Ils sont plus résistants", good: "Ils se décomposent plus rapidement", infos: "Les emballages biodégradables se décomposent plus facilement dans l'environnement, réduisant ainsi l'impact sur la nature." },
    { Question: "Qu'est-ce que le réchauffement climatique ?", Response1: "Augmentation de la température globale de la Terre", Response2: "Diminution de la biodiversité", Response3: "Accroissement des précipitations", good: "Augmentation de la température globale de la Terre", infos: "Le réchauffement climatique fait référence à l'augmentation à long terme de la température moyenne de la Terre." },
    { Question: "Quel terme désigne la consommation plus rapide des ressources naturelles que leur renouvellement ?", Response1: "Déforestation", Response2: "Surexploitation", Response3: "Régénération", good: "Surexploitation", infos: "La surexploitation se produit lorsque les ressources naturelles sont prélevées à un rythme supérieur à leur capacité de régénération." },
    { Question: "Quelle est la principale source d'émission de méthane d'origine humaine ?", Response1: "Rizières", Response2: "Décharges", Response3: "Centrales électriques", good: "Rizières", infos: "La culture du riz est une source importante d'émissions de méthane en raison des conditions anaérobies dans les rizières." },
    { Question: "Qu'est-ce que l'effet albédo dans le contexte climatique ?", Response1: "L'émission de chaleur par les surfaces urbaines", Response2: "L'absorption de la lumière solaire par les océans", Response3: "La réflexion de la lumière solaire par la Terre", good: "La réflexion de la lumière solaire par la Terre", infos: "L'effet albédo se réfère à la capacité d'une surface à réfléchir la lumière solaire." },
    { Question: "Quelle action individuelle contribue le plus à la réduction de l'empreinte carbone ?", Response1: "Utilisation de sacs en plastique réutilisables", Response2: "Réduction de la consommation de viande", Response3: "Utilisation d'ampoules LED", good: "Réduction de la consommation de viande", infos: "La production de viande a un impact significatif sur l'empreinte carbone, et réduire la consommation de viande peut aider à diminuer cet impact." },
    { Question: "Qu'est-ce que le 'développement durable' ?", Response1: "L'utilisation intensive des ressources naturelles pour un bénéfice immédiat.", Response2: "Une croissance économique rapide à court terme.", Response3: "Un développement qui satisfait les besoins du présent sans compromettre la capacité des générations futures à répondre à leurs propres besoins.", good: "Un développement qui satisfait les besoins du présent sans compromettre la capacité des générations futures à répondre à leurs propres besoins.", infos: "Le développement durable vise à équilibrer les aspects économiques, sociaux et environnementaux pour assurer la viabilité à long terme." },
    { Question: "Quel est l'effet néfaste de l'acidification des océans ?", Response1: "Augmentation de la biodiversité marine", Response2: "Diminution de la croissance des coraux et des coquilles d'organismes marins", Response3: "Amélioration de la qualité de l'eau", good: "Diminution de la croissance des coraux et des coquilles d'organismes marins", infos: "L'acidification des océans menace les organismes marins sensibles, comme les coraux et les mollusques, en entravant leur capacité à former des structures calcaires." },
    { Question: "Qu'est-ce que la captation du carbone ?", Response1: "Stockage du carbone dans des puits de carbone, comme les forêts et les sols", Response2: "Utilisation du carbone comme source d'énergie", Response3: "Libération de carbone dans l'atmosphère", good: "Stockage du carbone dans des puits de carbone, comme les forêts et les sols", infos: "La captation du carbone consiste à retirer le dioxyde de carbone de l'atmosphère et à le stocker dans des puits de carbone naturels ou artificiels." },
    { Question: "Quel organisme est souvent utilisé comme indicateur de la qualité de l'environnement aquatique ?", Response1: "Les dauphins", Response2: "Les loutres", Response3: "Les macro-invertébrés aquatiques, tels que les larves de moustiques", good: "Les macro-invertébrés aquatiques, tels que les larves de moustiques", infos: "Les macro-invertébrés aquatiques sont sensibles aux changements de qualité de l'eau, et leur présence ou absence peut indiquer l'état de l'environnement aquatique." },
    { Question: "Quel est le principal bénéfice des zones humides en termes d'écologie ?", Response1: "Purification de l'air", Response2: "Régulation des inondations", Response3: "Production d'énergie propre", good: "Régulation des inondations", infos: "Les zones humides jouent un rôle crucial dans la régulation des inondations en absorbant et en stockant l'eau." },
    { Question: "Quelle est la principale source d'émissions de gaz à effet de serre dans le secteur des transports ?", Response1: "Avions", Response2: "Vélos", Response3: "Voitures", good: "Voitures", infos: "Les voitures, en particulier celles fonctionnant aux combustibles fossiles, émettent une quantité significative de gaz à effet de serre." },
    { Question: "Quel processus naturel permet aux plantes de convertir la lumière du soleil en énergie alimentaire ?", Response1: "Respiration", Response2: "Photosynthèse", Response3: "Transpiration", good: "Photosynthèse", infos: "La photosynthèse est le processus par lequel les plantes utilisent la lumière du soleil pour produire de l'énergie alimentaire." },
    { Question: "Quelle est la principale cause de la pollution lumineuse ?", Response1: "Éruptions volcaniques", Response2: "Utilisation de feux d'artifice", Response3: "Éclairage excessif dans les zones urbaines", good: "Éclairage excessif dans les zones urbaines", infos: "La pollution lumineuse est causée par un éclairage excessif qui perturbe les écosystèmes et affecte la faune nocturne." },
    { Question: "Quel est le principal défi posé par les espèces envahissantes pour les écosystèmes locaux ?", Response1: "Concurrence avec les espèces indigènes", Response2: "Stimulation de la croissance des plantes indigènes", Response3: "Augmentation de la biodiversité", good: "Concurrence avec les espèces indigènes", infos: "Les espèces envahissantes peuvent souvent concurrencer les espèces indigènes pour les ressources, mettant en danger l'équilibre écologique." },
    { Question: "Quel est l'objectif principal du recyclage des déchets ?", Response1: "Augmenter la production de nouveaux produits", Response2: "Réduire la quantité de déchets envoyée en décharge", Response3: "Réduire la consommation d'énergie", good: "Réduire la quantité de déchets envoyée en décharge", infos: "Le recyclage vise à réduire la quantité de déchets destinés aux décharges en réutilisant des matériaux pour fabriquer de nouveaux produits." },
    { Question: "Quel terme décrit la cohabitation bénéfique de deux espèces différentes, où les deux en tirent profit ?", Response1: "Symbiose", Response2: "Parasitisme", Response3: "Prédation", good: "Symbiose", infos: "La symbiose est une relation où deux espèces différentes vivent ensemble de manière mutuellement bénéfique." },
    { Question: "Quel est l'impact environnemental majeur de la surexploitation des ressources halieutiques ?", Response1: "Augmentation de la biodiversité marine", Response2: "Déséquilibre des écosystèmes marins", Response3: "Amélioration de la qualité de l'eau", good: "Déséquilibre des écosystèmes marins", infos: "La surexploitation des ressources halieutiques peut entraîner un déséquilibre écologique, affectant la biodiversité et la santé des océans." },
    { Question: "Quelle est la principale source d'émission de dioxyde de soufre, un polluant atmosphérique contribuant à l'acidification des pluies ?", Response1: "Émissions industrielles", Response2: "Émissions automobiles", Response3: "Éruptions volcaniques", good: "Émissions industrielles", infos: "Les émissions industrielles, en particulier celles provenant de la combustion de combustibles fossiles, sont une source majeure de dioxyde de soufre." },
    { Question: "Quel est l'effet de l'abandon de terres agricoles sur l'environnement ?", Response1: "Augmentation de la biodiversité", Response2: "Réduction de la déforestation", Response3: "Dégradation des sols", good: "Dégradation des sols", infos: "L'abandon de terres agricoles peut entraîner la dégradation des sols, affectant la fertilité et la qualité de l'environnement." },
    { Question: "Quelle est la principale menace pour les récifs coralliens à l'échelle mondiale ?", Response1: "Pollution de l'air", Response2: "Augmentation de la salinité de l'eau", Response3: "Changement climatique", good: "Changement climatique", infos: "Le changement climatique, en particulier le réchauffement de l'eau de mer, représente une menace majeure pour les récifs coralliens à l'échelle mondiale." },
    { Question: "Quel est le rôle des corridors biologiques dans la préservation de la biodiversité ?", Response1: "Accélérer le développement des espèces", Response2: "Fournir des chemins pour la migration et la dispersion des espèces", Response3: "Éliminer les espèces invasives", good: "Fournir des chemins pour la migration et la dispersion des espèces", infos: "Les corridors biologiques sont des zones connectant des habitats naturels, facilitant la migration et la dispersion des espèces." },
    { Question: "Quelle est la principale cause de la dégradation des sols dans les zones arides ?", Response1: "Surpâturage", Response2: "Reforestation excessive", Response3: "Utilisation modérée des terres", good: "Reforestation excessive", infos: "Le surpâturage, où les animaux consomment excessivement la végétation, est une cause majeure de dégradation des sols dans les zones arides." },
    { Question: "Quel est le processus par lequel les plantes absorbent l'eau du sol et la libèrent sous forme de vapeur dans l'atmosphère ?", Response1: "Évaporation", Response2: "Condensation", Response3: "Transpiration", good:  "Transpiration", infos: "La transpiration est le processus par lequel les plantes libèrent de l'eau sous forme de vapeur à partir de leurs feuilles." },
    { Question: "Quel est l'objectif principal des aires marines protégées ?", Response1: "Préserver la biodiversité marine", Response2: "Accélérer le développement industriel en mer", Response3: "Favoriser la pêche intensive", good: "Préserver la biodiversité marine", infos: "Les aires marines protégées visent à préserver la vie marine, en limitant les activités humaines qui pourraient nuire à la biodiversité." },
    { Question: "Qu'est-ce que le jardinage de la forêt (forest gardening) ?", Response1: "Cultiver des plantes ornementales dans une forêt", Response2: "Cultiver des arbres pour la production de bois", Response3: "Cultiver une variété de plantes comestibles dans une forêt simulée", good: "Cultiver une variété de plantes comestibles dans une forêt simulée", infos: "Le jardinage de la forêt est une méthode durable de culture où une diversité de plantes comestibles est cultivée pour imiter une forêt naturelle." },
    { Question: "Quel processus naturel est essentiel pour la formation des sols et implique la décomposition des matières organiques par des micro-organismes ?", Response1: "Érosion", Response2: "Photosynthèse", Response3: "Décomposition", good: "Décomposition", infos: "La décomposition est le processus par lequel les micro-organismes décomposent les matières organiques en éléments nutritifs, contribuant à la formation des sols." },
    { Question: "Quel est l'impact de l'utilisation excessive d'engrais chimiques sur les écosystèmes aquatiques ?", Response1: "Augmentation de la biodiversité", Response2: "Eutrophisation, entraînant une prolifération d'algues", Response3: "Diminution de la salinité", good: "Eutrophisation, entraînant une prolifération d'algues", infos: "L'eutrophisation est le processus par lequel les niveaux élevés de nutriments, souvent issus d'engrais, entraînent une croissance excessive d'algues dans les cours d'eau." },
    { Question: "Quelle est la principale menace pour les populations d'abeilles et autres pollinisateurs ?", Response1: "Changement climatique", Response2: "Utilisation intensive de pesticides", Response3: "Déforestation", good: "Utilisation intensive de pesticides", infos: "Les pesticides peuvent avoir des effets néfastes sur les populations d'abeilles et d'autres pollinisateurs, mettant en péril la pollinisation des plantes." },
    { Question: "Quel phénomène naturel peut contribuer à la conservation des sols en prévenant l'érosion ?", Response1: "Incendies de forêt", Response2: "Vents forts", Response3: "Plantation d'arbres", good: "Plantation d'arbres", infos: "Les arbres jouent un rôle crucial dans la conservation des sols en aidant à prévenir l'érosion grâce à leurs racines stabilisantes." },
    { Question: "Quel est l'objectif principal des panneaux solaires photovoltaïques ?", Response1: "La pollinisation effectuée par une seule espèce de pollinisateurs", Response2: "La pollinisation impliquant deux espèces différentes de plantes", Response3: "La pollinisation se produisant exclusivement la nuit", good: "La pollinisation impliquant deux espèces différentes de plantes", infos: "La pollinisation croisée se produit lorsqu'une plante transfère le pollen à une fleur d'une autre espèce, favorisant la diversité génétique des plantes." },
    { Question: "Quel est le principal avantage des toits verts en milieu urbain ?", Response1: "Augmentation des émissions de gaz à effet de serre", Response2: "Réduction de la chaleur urbaine", Response3: "Promotion de la croissance des mauvaises herbes", good: "Réduction de la chaleur urbaine", infos: "Les toits verts contribuent à réduire la chaleur dans les zones urbaines en absorbant et en réfléchissant moins de chaleur que les surfaces traditionnelles." },
    { Question: "Qu'est-ce que la biomimétique en écologie ?", Response1: "L'utilisation de technologies pour surveiller les écosystèmes", Response2: "La modification génétique d'espèces pour améliorer leur adaptation", Response3: "L'imitation des modèles et des systèmes naturels pour résoudre des problèmes humains", good: "L'imitation des modèles et des systèmes naturels pour résoudre des problèmes humains", infos: "La biomimétique consiste à s'inspirer des designs et des processus naturels pour développer des solutions technologiques." },
    { Question: "Quel est l'effet de la déforestation sur le cycle de l'eau ?", Response1: "Augmentation des précipitations", Response2: "Réduction de l'évapotranspiration", Response3: "Augmentation du ruissellement", good: "Augmentation du ruissellement", infos: "La déforestation peut augmenter le ruissellement, car les arbres jouent un rôle crucial dans l'absorption de l'eau et la régulation du cycle de l'eau." },
    { Question: "Quelle est la principale cause de la perte de biodiversité dans le monde ?", Response1: "Destruction de l'habitat", Response2: "Changement climatique", Response3: "Pollution de l'air", good: "Destruction de l'habitat", infos: "La destruction de l'habitat, souvent due à des activités humaines comme la déforestation, est une cause majeure de perte de biodiversité." },
    { Question: "Quel est l'objectif de la permaculture en agriculture ?", Response1: "Maximiser les rendements agricoles à court terme", Response2: "Concevoir des systèmes agricoles durables et éthiques", Response3: "Utilisation intensive de pesticides", good: "Concevoir des systèmes agricoles durables et éthiques", infos: "La permaculture vise à créer des systèmes agricoles durables en s'inspirant des modèles observés dans la nature." },
    { Question: "Qu'est-ce que la zone morte dans un écosystème aquatique ?", Response1: "Une zone où la vie marine prospère", Response2: "Une zone dépourvue d'oxygène en raison de la pollution", Response3: "Une zone protégée de la pêche", good: "Une zone dépourvue d'oxygène en raison de la pollution", infos: "Une zone morte est caractérisée par des niveaux extrêmement bas d'oxygène, souvent causés par des déversements de nutriments provenant de sources humaines." },
    { Question: "Quel est l'effet de la surpêche sur les écosystèmes marins ?", Response1: "Augmentation de la biodiversité", Response2: "Diminution des populations de poissons", Response3: "Amélioration de la qualité de l'eau", good: "Diminution des populations de poissons", infos: "La surpêche peut entraîner une diminution des populations de poissons, perturbant l'équilibre des écosystèmes marins." },
    { Question: "Qu'est-ce que l'empreinte écologique d'une personne ?", Response1: "L'impact environnemental total de ses choix de vie", Response2: "La quantité d'eau qu'elle consomme quotidiennement", Response3: "Le nombre d'espèces animales qu'elle protège", good: "L'impact environnemental total de ses choix de vie", infos: "L'empreinte écologique mesure l'impact global d'une personne sur l'environnement en tenant compte de sa consommation de ressources naturelles." },
    { Question: "Quel est le rôle des abeilles dans la pollinisation des plantes ?", Response1: "Prédateurs des insectes nuisibles", Response2: "Producteurs de miel", Response3: "Transporteurs de pollen entre les fleurs", good: "Transporteurs de pollen entre les fleurs", infos: "Les abeilles jouent un rôle essentiel dans la pollinisation des plantes en transportant le pollen entre les fleurs, favorisant la reproduction des plantes." },
    { Question: "Qu'est-ce que la dégradation des terres ?", Response1: "La conversion de terres agricoles en zones urbaines", Response2: "L'épuisement des nutriments du sol", Response3: "La transformation de terres fertiles en désert", good: "La transformation de terres fertiles en désert", infos: "La dégradation des terres se produit lorsque les sols perdent leur fertilité et deviennent impropres à la croissance des plantes." },
    { Question: "Quel est l'objectif principal de la stratégie zéro déchet ?", Response1: "Éliminer complètement la production de déchets", Response2: "Maximiser la production de déchets pour le recyclage", Response3: "Ignorer la gestion des déchets", good: "Éliminer complètement la production de déchets", infos: "La stratégie zéro déchet vise à réduire au minimum la production de déchets en favorisant le recyclage et la réutilisation." },
    { Question: "Quelle est la principale source d'émission de protoxyde d'azote, un gaz à effet de serre ?", Response1: "Émissions industrielles", Response2: "Agriculture, en particulier l'utilisation d'engrais azotés", Response3: "Transport routier", good: "Agriculture, en particulier l'utilisation d'engrais azotés", infos: "L'utilisation d'engrais azotés dans l'agriculture contribue significativement aux émissions de protoxyde d'azote." },
    { Question: "Quel est l'effet de l'acidification des océans sur les organismes marins tels que les mollusques et les coraux ?", Response1: "Augmentation de leur croissance", Response2: "Amélioration de leur reproduction", Response3: "Diminution de leur capacité à former des coquilles ou des squelettes calcaires", good: "Diminution de leur capacité à former des coquilles ou des squelettes calcaires", infos: "L'acidification des océans menace les organismes marins en réduisant leur capacité à former des structures calcaires." },
    { Question: "Quel est l'objectif principal de la reforestation ?", Response1: "Augmenter la demande en bois", Response2: "Restaurer les écosystèmes forestiers et lutter contre la déforestation", Response3: "Créer des zones pour la chasse", good: "Restaurer les écosystèmes forestiers et lutter contre la déforestation", infos: "La reforestation vise à replanter des arbres pour restaurer les écosystèmes forestiers et contrer la perte de forêts." },
    { Question: "Quelle est la principale source d'émission de méthane d'origine humaine ?", Response1: "Rizières", Response2: "Décharges", Response3: "Élevage de bétail", good: "Élevage de bétail", infos: "L'élevage de bétail est une importante source d'émissions de méthane en raison de la digestion des animaux ruminants." },
    { Question: "Qu'est-ce que le syndrome d'effondrement des colonies d'abeilles ?", Response1: "Une maladie spécifique aux abeilles", Response2: "Un phénomène où les abeilles ouvrières quittent la ruche", Response3: "Une situation où la majorité des abeilles d'une colonie meurent soudainement", good: "Une situation où la majorité des abeilles d'une colonie meurent soudainement", infos: "Le syndrome d'effondrement des colonies d'abeilles est caractérisé par la mort soudaine de la plupart des abeilles d'une colonie." },
    { Question: "Quelle est la principale conséquence du dérèglement climatique sur les océans ?", Response1: "Augmentation des niveaux d'oxygène dans l'eau", Response2: "Augmentation de la salinité de l'eau", Response3: "Élévation des températures de l'eau", good: "Élévation des températures de l'eau", infos: "L'élévation des températures de l'eau est une conséquence majeure du dérèglement climatique, ayant des impacts sur les écosystèmes marins, y compris le blanchissement des coraux et la perturbation des habitats." },
    { Question: "Quel est le principal gaz à effet de serre émis par les activités humaines ?", Response1: "Dioxyde de carbone (CO2)", Response2: "Méthane (CH4)", Response3: "Protoxyde d'azote (N2O)", good: "Dioxyde de carbone (CO2)", infos: "Le dioxyde de carbone est le principal gaz à effet de serre émis par les activités humaines, principalement par la combustion de combustibles fossiles." },
    { Question: "Quelle est la principale source d'émission de dioxyde de carbone dans le secteur des transports ?", Response1: "Navires", Response2: "Avions", Response3: "Voitures", good: "Avions", infos: "Les voitures, en particulier celles utilisant des carburants fossiles, sont une source majeure d'émissions de dioxyde de carbone dans le secteur des transports." },
    { Question: "Quel est l'objectif principal des zones de captage d'eau potable ?", Response1: "Assurer la fourniture en eau potable pour les populations locales", Response2: "Protéger les zones de loisirs", Response3: "Promouvoir la pêche", good: "Assurer la fourniture en eau potable pour les populations locales", infos: "Les zones de captage d'eau potable sont conçues pour protéger les sources d'eau utilisées pour la fourniture en eau potable des communautés." },
    { Question: "Qu'est-ce que l'effet de serre ?", Response1: "Le refroidissement de la planète", Response2: "La réflexion de la lumière solaire", Response3: "Le piégeage de la chaleur par certains gaz atmosphériques", good: "Le piégeage de la chaleur par certains gaz atmosphériques", infos: "L'effet de serre est le processus par lequel certains gaz atmosphériques piégent la chaleur du soleil, contribuant au réchauffement de la planète." },
    { Question: "Qu'est-ce que la déforestation ?", Response1: "La conversion de forêts en terres agricoles ou urbaines", Response2: "La plantation d'arbres dans des zones arides", Response3: "La régénération naturelle des forêts", good: "La conversion de forêts en terres agricoles ou urbaines", infos: "La déforestation est le processus de conversion de zones forestières en terres utilisées à des fins agricoles, urbaines ou industrielles." },
    { Question: "Quel est l'impact de la pollution plastique sur les écosystèmes marins ?", Response1: "Menace pour la vie marine en raison de l'ingestion de déchets plastiques", Response2: "Réduction des risques pour la faune marine", Response3: "Promotion de la biodiversité marine", good: "Menace pour la vie marine en raison de l'ingestion de déchets plastiques", infos: "La pollution plastique représente une menace sérieuse pour les écosystèmes marins en raison de l'ingestion de déchets plastiques par la faune marine." },
    { Question: "Quelle est la principale source d'émission de gaz à effet de serre dans l'industrie ?", Response1: "Combustion de biomasse", Response2: "Processus de fabrication et d'énergie", Response3: "Décharges industrielles", good: "Processus de fabrication et d'énergie", infos: "Les processus industriels et la production d'énergie sont des sources majeures d'émissions de gaz à effet de serre." },
    { Question: "Qu'est-ce que la consommation responsable ?", Response1: "Acheter sans considération pour l'impact environnemental", Response2: "Consommer des produits respectueux de l'environnement et socialement responsables", Response3: "Acheter des produits bon marché sans se soucier de leur provenance", good: "Consommer des produits respectueux de l'environnement et socialement responsables", infos: "La consommation responsable implique de faire des choix éthiques et respectueux de l'environnement dans ses achats quotidiens." },
    { Question: "Quel est l'objectif principal des réserves naturelles ?", Response1: "Préserver la biodiversité et les écosystèmes naturels", Response2: "Encourager la construction d'infrastructures", Response3: "Favoriser l'exploitation minière", good: "Préserver la biodiversité et les écosystèmes naturels", infos: "Les réserves naturelles ont pour objectif principal de préserver la biodiversité et les écosystèmes naturels en limitant les activités humaines qui pourraient les compromettre." },
    { Question: "Qu'est-ce que l'empreinte carbone d'un individu ?", Response1: "La mesure de la taille des pieds", Response2: "La quantité totale de gaz à effet de serre émise en raison des activités quotidiennes", Response3: "Le nombre d'arbres plantés par une personne", good: "La quantité totale de gaz à effet de serre émise en raison des activités quotidiennes", infos: "L'empreinte carbone mesure la quantité totale de gaz à effet de serre émise par une personne, souvent exprimée en équivalent CO2." },
    { Question: "Quelle est la principale menace pour les écosystèmes d'eau douce due à la pollution agricole ?", Response1: "Acidification", Response2: "Surpêche", Response3: "Eutrophisation", good: "Eutrophisation", infos: "L'eutrophisation est le processus par lequel les nutriments provenant de la pollution agricole entraînent une prolifération d'algues, perturbant les écosystèmes d'eau douce." },
    { Question: "Qu'est-ce que le commerce équitable en agriculture ?", Response1: "Favoriser les grandes exploitations agricoles au détriment des petites exploitations", Response2: "Garantir des conditions de travail équitables et des prix justes pour les agriculteurs", Response3: "Pratiquer le troc au lieu de la vente", good: "Garantir des conditions de travail équitables et des prix justes pour les agriculteurs", infos: "Le commerce équitable vise à garantir des conditions de travail équitables et des prix justes pour les producteurs agricoles, en particulier dans les pays en développement." },
    { Question: "Qu'est-ce que la transition énergétique ?", Response1: "Passer à des sources d'énergie plus durables et renouvelables", Response2: "Continuer à dépendre des énergies fossiles", Response3: "Passer d'une source d'énergie à une autre sans considération environnementale", good: "Passer à des sources d'énergie plus durables et renouvelables", infos: "La transition énergétique implique le passage à des sources d'énergie plus durables et renouvelables pour réduire l'impact environnemental." },
    { Question: "Quelle est l'importance des corridors biologiques dans la préservation de la biodiversité ?", Response1: "Favoriser la croissance des populations d'espèces", Response2: "Fournir des zones pour les activités récréatives", Response3: "Faciliter la migration et la dispersion des espèces", good: "Faciliter la migration et la dispersion des espèces", infos: "Les corridors biologiques facilitent la migration des espèces, contribuant à maintenir la diversité génétique et la santé des populations." },
    { Question: "Qu'est-ce que la défaunation ?", Response1: "L'éradication des insectes d'un écosystème", Response2: "La disparition d'espèces animales d'une région", Response3: "La réduction de la population d'arbres dans une région", good: "La disparition d'espèces animales d'une région", infos: "La défaunation désigne la diminution ou la disparition des populations animales dans une région donnée." },
    { Question: "Quel est l'effet de la pollution lumineuse sur les écosystèmes nocturnes ?", Response1: "Perturbation des cycles de sommeil des animaux", Response2: "Augmentation de l'activité des prédateurs nocturnes", Response3: "Amélioration de la visibilité pour les espèces nocturnes", good: "Perturbation des cycles de sommeil des animaux", infos: "La pollution lumineuse perturbe les cycles naturels d'activité et de repos des espèces nocturnes." },
    { Question: "Quel est l'objectif principal des réserves marines ?", Response1: "Encourager la pêche intensive", Response2: "Préserver la biodiversité marine et les écosystèmes", Response3: "Permettre la construction d'installations offshore", good: "Préserver la biodiversité marine et les écosystèmes", infos: "Les réserves marines sont créées pour protéger la biodiversité marine et les écosystèmes en limitant les activités humaines." },
    { Question: "Quel est l'impact de la fragmentation des habitats sur la biodiversité ?", Response1: "Augmentation de la biodiversité", Response2: "Diminution de la biodiversité", Response3: "Aucun impact sur la biodiversité", good: "Diminution de la biodiversité", infos: "La fragmentation des habitats peut entraîner une diminution de la biodiversité en fragmentant les populations animales et en limitant leurs déplacements." },
    { Question: "Qu'est-ce que le greenwashing dans le contexte environnemental ?", Response1: "Le processus de verdissement des espaces urbains", Response2: "L'utilisation de peintures écologiques", Response3: "La pratique consistant à donner une fausse impression d'engagement environnemental", good:  "La pratique consistant à donner une fausse impression d'engagement environnemental", infos: "Le greenwashing désigne le fait de présenter de manière trompeuse des pratiques, des produits ou des entreprises comme étant écologiques." },
    { Question: "Quel est l'effet de l'acidification des océans sur les organismes marins à coquille calcaire ?", Response1: "Affaiblissement de leur coquille calcaire", Response2: "Diminution de la fragilité de leur coquille", Response3: "Amélioration de leur croissance", good: "Affaiblissement de leur coquille calcaire", infos: "L'acidification des océans peut affaiblir les coquilles calcaires des organismes marins, tels que les mollusques, en rendant l'eau plus acide." },
    { Question: "Quelle est la principale source d'émission de gaz à effet de serre associée à la déforestation ?", Response1: "Émissions de litière végétale en décomposition", Response2: "Émissions des animaux sauvages", Response3: "Émissions résultant de la combustion des arbres coupés", good: "Émissions résultant de la combustion des arbres coupés", infos: "Lorsque les arbres sont coupés et brûlés, cela libère du dioxyde de carbone (CO2), contribuant aux émissions de gaz à effet de serre." },
    { Question: "Qu'est-ce que la neutralité carbone ?", Response1: "L'état où une région n'a aucune émission de carbone", Response2: "L'équilibre entre les émissions de carbone et leur absorption par des actions de compensation", Response3: "La conversion complète des émissions de carbone en énergie", good: "L'équilibre entre les émissions de carbone et leur absorption par des actions de compensation", infos: "La neutralité carbone vise à compenser les émissions de carbone par des actions telles que la plantation d'arbres, afin d'atteindre un équilibre." },
    { Question: "Quelle est la principale conséquence de la pollution plastique pour la faune marine ?", Response1: "Augmentation des ressources alimentaires", Response2: "Ingérence dans les migrations marines", Response3: "Ingestion accidentelle de déchets plastiques", good: "Ingestion accidentelle de déchets plastiques", infos: "La faune marine peut ingérer accidentellement des déchets plastiques, ce qui peut entraîner des problèmes de santé graves." },
    { Question: "Qu'est-ce que la permaculture ?", Response1: "Une technique d'agriculture intensive", Response2: "Un système agricole durable inspiré des écosystèmes naturels", Response3: "La rotation des cultures en agriculture", good: "Un système agricole durable inspiré des écosystèmes naturels", infos: "La permaculture vise à créer des systèmes agricoles durables en s'inspirant des modèles observés dans la nature." },
    { Question: "Quel est l'impact de la montée du niveau de la mer sur les zones côtières ?", Response1: "Réduction des risques d'inondation", Response2: "Augmentation de la salinité des sols", Response3: "Risques accrus d'inondation et de perte d'habitat", good: "Risques accrus d'inondation et de perte d'habitat", infos: "La montée du niveau de la mer peut augmenter les risques d'inondation et entraîner la perte d'habitat dans les zones côtières." },
    { Question: "Qu'est-ce que le bioplastique ?", Response1: "Plastique non biodégradable", Response2: "Plastique fabriqué à partir de ressources fossiles", Response3: "Plastique fabriqué à partir de matières premières renouvelables", good: "Plastique fabriqué à partir de matières premières renouvelables", infos: "Le bioplastique est fabriqué à partir de matières premières renouvelables, telles que les plantes, et est considéré comme une alternative plus écologique aux plastiques traditionnels." },
    { Question: "Quelle est la principale cause de la déforestation en Amazonie ?", Response1: "Agriculture, en particulier l'élevage de bétail", Response2: "Exploitation minière", Response3: "Activités de reboisement", good: "Agriculture, en particulier l'élevage de bétail", infos: "L'élevage de bétail, en particulier pour la production de viande, est l'une des principales causes de la déforestation en Amazonie." },
    { Question: "Quel est l'impact de la pollution de l'air sur la santé humaine ?", Response1: "Amélioration de la fonction pulmonaire", Response2: "Augmentation des risques de maladies respiratoires et cardiovasculaires", Response3: "Renforcement du système immunitaire", good: "Augmentation des risques de maladies respiratoires et cardiovasculaires", infos: "La pollution de l'air peut augmenter les risques de maladies respiratoires et cardiovasculaires chez les humains." },
    { Question: "Quel est l'impact de la surpêche sur l'équilibre des écosystèmes marins ?", Response1: "Déséquilibre des populations de poissons et perturbation de la chaîne alimentaire", Response2: "Protection accrue des espèces marines", Response3: "Augmentation de la diversité des espèces marines", good: "Déséquilibre des populations de poissons et perturbation de la chaîne alimentaire", infos: "La surpêche peut entraîner une diminution des populations de poissons, perturbant ainsi l'équilibre des écosystèmes marins et la chaîne alimentaire." },
    { Question: "Quel est l'objectif principal des réserves naturelles marines ?", Response1: "Promouvoir la pêche intensive", Response2: "Préserver la biodiversité marine et les habitats marins", Response3: "Faciliter l'exploitation pétrolière en mer", good: "Préserver la biodiversité marine et les habitats marins", infos: "Les réserves naturelles marines sont établies pour protéger la biodiversité marine et les habitats marins en limitant les activités humaines." },
    { Question: "Qu'est-ce que le biodiesel ?", Response1: "Un pesticide utilisé en agriculture biologique", Response2: "Un carburant produit à partir de sources renouvelables telles que l'huile végétale", Response3: "Un additif chimique dans les produits de nettoyage", good: "Un additif chimique dans les produits de nettoyage", infos: "Le biodiesel est un carburant renouvelable fabriqué à partir de sources telles que l'huile végétale." },
    { Question: "Qu'est-ce que le commerce éthique ?", Response1: "Le commerce basé sur des principes moraux et éthiques", Response2: "Le commerce de produits de luxe", Response3: "Le commerce réservé aux grandes entreprises", good: "Le commerce basé sur des principes moraux et éthiques", infos: "Le commerce éthique vise à promouvoir des pratiques commerciales justes, équitables et respectueuses de l'éthique." },
    { Question: "Quel est l'effet de la déforestation sur le climat mondial ?", Response1: "Refroidissement de la planète", Response2: "Aucun impact sur le climat", Response3: "Augmentation des émissions de gaz à effet de serre et du réchauffement climatique", good: "Augmentation des émissions de gaz à effet de serre et du réchauffement climatique", infos: "La déforestation contribue à une augmentation des émissions de dioxyde de carbone dans l'atmosphère, contribuant ainsi au réchauffement climatique." },
    { Question: "Qu'est-ce que le piège à carbone dans les écosystèmes ?", Response1: "Un dispositif technologique pour capturer le dioxyde de carbone de l'air", Response2: "Un processus naturel par lequel les écosystèmes stockent le carbone", Response3: "Une méthode pour libérer du carbone dans l'atmosphère", good: "Un processus naturel par lequel les écosystèmes stockent le carbone", infos: "Certains écosystèmes agissent comme des pièges à carbone en stockant le carbone, contribuant ainsi à atténuer les niveaux de dioxyde de carbone dans l'atmosphère." },
    { Question: "Quel est l'impact de la pollution lumineuse sur les écosystèmes nocturnes ?", Response1: "Amélioration de la visibilité pour les espèces nocturnes", Response2: "Perturbation des cycles de sommeil des animaux", Response3: "Augmentation de l'activité des prédateurs nocturnes", good: "Perturbation des cycles de sommeil des animaux", infos: "La pollution lumineuse perturbe les cycles naturels d'activité et de repos des espèces nocturnes." }
]

let response:string;
let card1:string;
let card2:string;
let card3:string;
let index:number;
let score:number = 0;
let good:number = 0;

let i = ref(getRandomNumber(questionList.length));

function getRandomNumber(len:number){
    index = Math.floor(Math.random() * len)
    response = questionList[index].good
    card1 = questionList[index].Response1
    card2 = questionList[index].Response2
    card3 = questionList[index].Response3
    return index
}

    function CheckAnswer(value: string){
        score++;
        if (value == response){
            good++;
            let el1 = document.getElementById('false') as HTMLElement
            el1.style.display = 'none'
            let el2 = document.getElementById('true') as HTMLElement
            el2.style.display = 'flex'
            if (value == questionList[index].Response1){
                card1 = 'res1'
                card2 = 'res2'
                card3 = 'res3'
            }
            else if(value == questionList[index].Response2){
                card1 = 'res2'
                card2 = 'res1'
                card3 = 'res3'
            }
            else if (value == questionList[index].Response3) {
                card1 = 'res3'
                card2 = 'res2'
                card3 = 'res1'
            }
         } else if(value != response){
            let el1 = document.getElementById('true') as HTMLElement
            el1.style.display = 'none'
            let el2 = document.getElementById('false') as HTMLElement
            el2.style.display = 'flex'
            
            if (response == questionList[index].Response1) {
                card1 = 'res1'
                card2 = 'res2'
                card3 = 'res3'
            }
            else if (response == questionList[index].Response2) {
                card1 = 'res2'
                card2 = 'res1'
                card3 = 'res3'
            }
            else if (response == questionList[index].Response3) {
                card1 = 'res3'
                card2 = 'res2'
                card3 = 'res1'
            }
         }
            let elem1 = document.getElementById(card1) as HTMLElement
            elem1.style.background = 'rgb(0, 189, 126)'
            elem1.style.borderRadius = "5px"
            let elem2 = document.getElementById(card2) as HTMLElement
            elem2.style.background = 'rgba(213, 0, 0, 0.626)'
            elem2.style.borderRadius = "5px"
            let elem3 = document.getElementById(card3) as HTMLElement
            elem3.style.background = 'rgba(213, 0, 0, 0.626)'
            elem3.style.borderRadius = "5px"
            let footer = document.getElementById('footer') as HTMLElement
            footer.style.display = 'flex'
    }
    function nextQuestion(){
        if (score == 10) {
        let footer = document.getElementById('footer') as HTMLElement
        footer.style.display = 'none'
        let question = document.getElementById('question') as HTMLElement
        question.style.display = 'none'
        let responses = document.getElementById('responses') as HTMLElement
        responses.style.display = 'none'
        let result = document.getElementById('result') as HTMLElement
        result.style.display = 'flex'
    }else{
        let elem1 = document.getElementById(card1) as HTMLElement
        elem1.style.background = 'white'
        let elem2 = document.getElementById(card2) as HTMLElement
        elem2.style.background = 'white'
        let elem3 = document.getElementById(card3) as HTMLElement
        elem3.style.background = 'white'
        let footer = document.getElementById('footer') as HTMLElement
        footer.style.display = 'none'
        i.value = getRandomNumber(questionList.length)
    }
    }
    function refresh(){
        document.location.reload()
    }
    
</script>

<template>
    <div class="body">
        <div class="result" id="result">
            <div class="congrats">
                <div class="text">
                    <div>Congrat you have finish the Quiz !</div>
                    <div>We have more question!</div> 
                </div>
                <div class="score">{{ good }}/10</div>
            </div>
            <div class="new">
                <Button @click="refresh()">Click here to restart</Button>
            </div>
        </div>
        
        <div class="question" id="question">
            {{ questionList[i].Question }}
        </div>
        <div class="responses" id="responses">
            <div class="res" @click="CheckAnswer(questionList[i].Response1)">
                <Card :pt="{ body: {class: 'res1' ,id: 'res1' } }">
                    <template #title> Answer 1 </template>
                    <template #content>
                        <p class="m-0">
                            {{ questionList[i].Response1 }}
                        </p>
                    </template>
                </Card>
            </div>
            <div class="res" @click="CheckAnswer(questionList[i].Response2)">
                <Card :pt="{ body: { class: 'res2', id: 'res2' } }">
                    <template #title>  Answer 2 </template>
                    <template #content>
                        <p class="m-0">
                            {{ questionList[i].Response2 }}
                        </p>
                    </template>
                </Card>
            </div>
            <div class="res" @click="CheckAnswer(questionList[i].Response3)">
                <Card :pt="{ body: { class: 'res3' , id: 'res3' } }">
                    <template #title>  Answer 3 </template>
                    <template #content>
                        <p class="m-0" >
                            {{ questionList[i].Response3 }}
                        </p>
                    </template>
                </Card>
            </div>
        </div>
        <div class="footer" id="footer">
            <div class="results">
                    <div id="true">
                        TRUE
                    </div>
                    <div id="false">
                        FALSE
                    </div>
                </div>
            <div class="response">
                {{ questionList[i].infos }}
            </div>
            <div class="next">
                <Button class="pi pi-arrow-right" @click="nextQuestion()"> Next</Button>
            </div>
        </div> 
    </div>
</template>

<style>
    .result{
        display:none;
        flex-direction: column;
        align-items: center;
        padding: 1%;
        .score{
            font-size: 4vw;
        }
        .congrats{
            display: flex;
            flex-direction: column;
            align-items: center;
            font-size: 3vw;
            .text{
                display: inherit;
                flex-direction: column;
            align-items: center;
            }
        }
    }
    .question{
        display:flex;
        width: 100%;
        justify-content: center;
    }
    .responses{
        padding: 1%;
        padding-top: 5%;
        display: flex;
        justify-content:space-between ;
    }
    .res{
        width: 32%;
        #res1{
            font-size:1vw;
            transition: background-color 1s;
        }
        #res2{
            font-size:1vw;
            transition: background-color 1s;
        }
        #res3{
            font-size:1vw;
            transition: background-color 1s;
        }
    }
    .footer{
        transition: display 1s;
        padding: 3%;
        display:none;
        flex-direction: column;
        align-items: center;
        .response{
            padding: 1%;
            font-size: 1vw;
        }
        #true{
            font-size: 3vw;
            color: rgb(0, 189, 126);
            display: none;
        }
        #false{
            font-size: 3vw;
            color:rgba(211, 56, 56, 0.692);
            display: none;
        }
    }

</style>