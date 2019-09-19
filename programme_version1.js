(function actualisation() { // fonction d'explication avant de pouvoir avoir accès au contenu du code
	const hello_world = prompt("Bonjour veuillez annuler les message qui suivront, puis clic droit + inspecter l'élément, entrez dans l'onglet console, et enfin actualisez");
})();
class Genre { // class des genre : le neutre, qui suivant le type de fichier placer devant deviendra male ou femelle
	constructor(neutre, male, feminin) {											/* installe un système de drag & drop */
		this.neutre = neutre;
		this.male = male;
		this.feminin = feminin;
	};
	ajouter_genre(g_neutre, g_male, g_feminin) {  /* ----------prochaine mise à jour */

	};
	afficher_genre(nb) { // choix d'affichage des genres 
		let reponse = "";
		switch(nb) {
			case 0 :
				reponse = `${this.neutre}`; 	// N°0 = les genres Neutres u / c / l
				break;
			case 1 :
				reponse = `${this.male}`;		// N°1 = les genres Male un / ce / le
				break;
			case 2 :
				reponse = `${this.feminin}`;	// N°3 = les genres Femelle une / cette / la 
				break;
		};
		return reponse; 
	};
};
class Type { // classes des playlist : Nom de la playlist / type du fichier ( ex : film ) / liste comprenant la playlist / genre féminin ou masculin de la playlist
    constructor(nom_playlist, commun, liste, genre) {
        this.liste = liste;
        this.commun = commun;
        this.nomPlaylist = nom_playlist;
        this.genre = genre;
        this.taille = liste.length;
    };

    
    afficher() { // Système de présentation d'une playlist ainsi que que de son nom
    	console.log(`Vous consultez la playlist : ${this.nomPlaylist}`);
		for (let i = 0; i < this.taille; i++) {
			console.log(`${i+1}. ${this.liste[i]}`);
		};
    };

    s() { // Système de test de base pour le genre 
    	switch(this.genre) {
    		case true :
	    		return`un ${this.commun}`;
	    		break;
    		case false :
    			return`une ${this.commun}`;
    			break;
    	}; 
    };

    changer_nom(nouveau) {  /* --------------------------------prochaine mise à jour */
    	this.nomPlaylist = capital(nouveau);
    };


    /* a_deplacer = id du fichier que l'utilisateur veut déplacer dans une playlist 
       id_haut = place à laquelle le a_deplacer veut être placé */


    changer_place(a_deplacer, id_haut) { 
    	const id_deplace = (a_deplacer - 1) 		// id du fichier déplacer
    	const nom = this.liste[id_deplace]; 		// nom du fichier déplacer
    	const id = (id_haut - 2); 					// * id du fichier juste au dessus de la place *
    	this.liste.splice(id_deplace, 1); 			// suppression de la place actuelle du fichier à déplacer
    	const final = []; 							// création de la variables retournée
    	if(id === -1) { 							// * ou pour le premier ("le 0") *
    		final.push(nom); 						// * Ajout direct du nom du fichier au début de la playlist *
    	};
    	for (var i = 0; i < this.taille; i++) { 	// boucle de reconstruction / actualisation de la playlist 
    		final.push(this.liste[i]); 				// Ajout des fichiers à la playlist en commencant par le début
    		if(i === id) { 							// Dès que le tour de boucle arrive à l'id du fichier juste au dessus de la place désirée
    			final.push(nom); 					// ajout du fichier à la place demandé
    		};
    	};
    	this.liste = final;
    };

    /*comparaison(mot) {
    	for (var i = 0; i < Things.length; i++) {
    		Things[i]
    	}
    }*/
	
    ajoutAuto(nombre) { /* Système d'ajout automatique de playlist avec un nombre minimum de 5, */
    						
    };
	afficher_type(nb) { /* Méthode d'accès à toute les différentes caractéristiques d'un type */
		let reponse = "";
		switch(nb) {
			case 0 :
				reponse = `${this.liste}`; 			// les noms des fichiers de la playlist
				break;
			case 1 :
				reponse = `${this.commun}`;			// le nom commun à tous les fichiers créé
				break;
			case 2 :
				reponse = `${this.nomPlaylist}`;	// Le nom de la playlist
				break;
			case 3 :
				reponse = `${this.genre}`;			// Genre male / femelle d'un fichier
				break;
			case 4 :
				reponse = `${this.taille}`;			// Taille de la playlist
				break;
		};
		return reponse;
	};
};

const g = [];
const t = [];
g.push(new Genre("u", "un", "une"));
g.push(new Genre("l", "le", "la"));
g.push(new Genre("c", "ce", "cette"));
t.push(new Type("Film", "film", ["film1","film2","film3","film4","film5","film6","film7","film8","film9","film10","film11","film12","film13","film14",
	"film15","film16","film17","film18","film19","film20"], true));
t.push(new Type("Musique", "musique", ["musique1","musique2","musique3","musique4","musique5","musique6","musique7","musique8","musique9","musique10"], false));
t.push(new Type("Photo", "photo", ["photo1","photo2","photo3","photo4","photo5","photo6","photo7","photo8","photo9",
	"photo10","photo11","photo12","photo13","photo14","photo15","photo16","photo17","photo18","photo19","photo20"], false));


function remplace(phrase) {						/* En chantier */ /* Fonction de remplacement de mot première version */
	let reponse = "";
	let i = 0;
	while(i < phrase.length) {
		if(phrase[i] !== ":" || ((phrase[i])+(phrase[i+1])) === ": ") {
			reponse += (phrase[i]);
		};
		if(phrase[i] === ":" && phrase[i+1] !== " ") {
			let n = i+1;
			let mot = "";
			let mot1 = "";
			let faux = phrase[i];
			let boucle = true;
			let condi = true;
			while(boucle) {
				if(condi === true) {
					if(phrase[n] === ":") {
						condi = false;
					} else {
						mot += phrase[n];
					};
				};
				faux += (phrase[n]);
				n++;
				if(condi === false) {
					if(phrase[n] === ":") {
						boucle = false;
					} else {
						mot1 += phrase[n];
					};
				};
			};
			let numero = -1;
			for (let a = 0; a < g.length; a++) {
				if(mot === g[a].afficher_genre(0)) {
					numero = a;
					a = g.length;
				} else {
					numero = -1;
				};
			};
			let numero1 = -1;
			for (let b = 0; b < t.length; b++) {
				if(mot1 === t[b].afficher_type(1)) {
					numero1 = b;
					b = t.length;
				} else {
					numero1 = -1;
				};
			};
			let condition = true;
			if(numero > -1 && numero1 > -1) {
				condition = false;
				switch(t[numero1].afficher_type(3)) {
					case "true" :
						mot = (g[numero].afficher_genre(1));
						/* male */
						break;
					case "false" :
						mot = (g[numero].afficher_genre(2));
						/* femelle */
						break;
				};
				reponse += (mot+" "+mot1);
			};
			if(condition) {
				reponse += faux;
			};
			i=n;
		};
		i++;
	};
	console.log(reponse);
};

function deplacer(nom_playlist, a_deplacer, id_haut) { // Système de base de la fonction de déplacement de fichier
	const nom = nom_playlist[a_deplacer];
	nom_playlist.splice(a_deplacer, 1);
	const final = [];
	if (id_haut === -1) {
		final.push(nom);
	};
	for (var i = 0; i < nom_playlist.length; i++) {
		final.push(nom_playlist[i]);
		if (i === id_haut) {
			final.push(nom);
		};
	};
	return`${final}`;
};

function verifier(mot) { // Fonction de suppression d'espace
    let verifie = "";
    for (let i = 0; i < mot.length; i++) {
        if (mot !== "" && mot[i] !== " ") {
            verifie += mot[i];
        };
    };
    return verifie;
};

function recherche(mot1, liste) { // Fonction de recherche d'un mot dans une liste ( retourne un booléen )
	let reponse = false;
	for (var i = 0; i < liste.length; i++) {
		if (mot1 === liste[i]) {
			reponse = true;
		};
	};
	return reponse;
};

function aj_aff(lettre, af) { // code INACTIF ( tentative de système d'affichage de genre et playlist ainsi qu'ajout de genre et playlist)
	let a = true;
	while(a) {
		switch(lettre.toLowerCase()) {
			case "g" :
				switch(af.toLowerCase()) {
					case "af" :
						afficher_tout(lettre);
						/* le code d'affichage des genres */
						break;
					case "a" :

						/* le code d'ajout des genres */
						break;
				};
			case "t" :
				switch(af.toLowerCase()) {
					case "af" :
						afficher_tout(lettre)
						/* le code d'affichage des playlists */
						break;
					case "a" :
						/* le code d'ajout des playlists */
						break;
				};
		};
	};
};

function afficher_tout(lettre) { // code INACTIF ( fonction potentiellement utile pour la fonction du haut )
	for (var i = 0; i < lettre.length; i++) {
		console.log(lettre[i].afficher_genre());
	};
};

/*function aff_tt(tout, fonction) {
	for (var i = 0; i < tout.length; i++) {
		console.log(`Tapez ${i+1} pour : ${tout[i].fonction}`)
	};
};*/

function choisir(choix, playlist) { // INACTIF
	for (var i = 0; i < playlist.length; i++) {
		return 
	};
};

function capital(mot) { // mise en capital de la première lettre d'un mot ( À changer : L'ordre de priorité )
	let reponse = "";
	for (var i = 0; i < mot.length; i++) {
		if (i === 0) {
			reponse += (mot[i].toUpperCase());
		} else {
			reponse += (mot[i]);
		};
	};
	return reponse;
};

function liste_nom(choix) { // système de choix proposé à l'utilisateur
	let liste = [];
	let b = 1;
	for (let i = 0; i < t.length; i++) {
		if (choix === 2 || (choix === 1 && recherche(t[i].afficher_type(choix), liste) === false)) {
			console.log(`Tapez : ${b} pour : ${t[i].afficher_type(choix)}`);
			b++;
			if (choix === 1) {
				liste.push(t[i].afficher_type(choix));
			};
		};
	};
};

function cre_liste(nb, nom) { // fonction utilie pour la création automatique de nom de fichier individuvel
	let reponse = [];
	for (var i = 0; i < nb; i++) {
		let b = [i+1];
		reponse.push(`${nom}`+`${b}`);
	};
	return reponse;
};




let quitter = true;
while(quitter) { // début du code ( à recouper dans des fonctions )
	let menu = true;
	let c = false;
	let r = false;
	let dev = false;
	while(menu) {
		console.log('Afficher toutes les playlists : "A" \nChoisissez une playlist : "C" \nQuitter : "Q" \nAjouter une playlist : "J" \nParamètres : "P"');
		const reponse = prompt("À vous de choisir : ");
		switch(reponse.toLowerCase()) {
			case "a" :
				for (let i = 0; i < t.length; i++) {
					t[i].afficher();
				};
				break;
			case "j" :
				let f = true;
				let nomVerif = "";
				while(f) {
					let newNom = prompt("Nom de la nouvelle playlist : ");
					newNom = capital(verifier(newNom));
					if (newNom === "") {
						console.log("Vous n'avez rien écrit.");
					};
					if (recherche(newNom, liste(t)) === false && newNom !== "") {
						nomVerif = capital(newNom);
						f = false;
						console.log(`Vous avez choisi : ${nomVerif}.`);
					} else if (recherche(newNom, liste(t)) === true) {
						console.log("Ce nom existe déjà.");
					};
				};
				console.log("Vous pouvez aussi choisir parmi les noms de fichier existant déjà : ");
				liste_nom(1);
				let genreCo = [];
				let confirm = true;
				let comMunVerif = "";
				let comMun = prompt("Donnez un nom commun à vos fichier : ");
				commMun = verifier(comMun);
				let b = 0;
				for (var i = 0; i < t.length; i++) {
					b = [i+1];
					if(comMun === (`${b}`)) {
						comMunVerif = (t[i].afficher_type(1));
						genreCo = (t[i].afficher_type(3));
						confirm = false;
					};	
				};
				if(confirm) {
					let l = true;
					comMunVerif = comMun;
					while(l) {
						console.log(`Dit-on : \nun ${comMunVerif} \nou \nune ${comMunVerif} \nRépondez par "un" ou "une"`);
						const gr = prompt("Réponse : ");
						switch(gr.toLowerCase()) {
							case "un" :
								genreCo = true;
								l = false;
								break;
							case "une" :
								genreCo = false;
								l = false;
								break;
							default:
							console.log("Un ou une, rien d'autre.");
						};
					};
				};
				let nb = Number(prompt("Donnez un nombre de fichier, minimum 5 : "));
				if((`${nb}`) < 5) {
					nb = 5;
				};
				let listCo = cre_liste((`${nb}`), comMunVerif);
				t.push(new Type(nomVerif, comMunVerif, listCo, genreCo));
				console.log(`Nouveau nom : ${nomVerif} \nNom commun : ${comMunVerif} \nNombre de fichier : ${nb} \nGenre : ${genreCo}`);
				t[t.length-1].afficher();
				break;
			case "c" :
				c = true;
				menu = false;
				break;
			case "p" :
				dev = true;
				menu = false;
				break;
			case "q" :
				menu = false;
				quitter = false;
				console.log("À bientôt !")
				break;
			default:
			console.log("Saisissez les valeurs : A, C, Q ou J");
		};
	};
	while(c) {
		liste_nom(2);
		const choix = Number(prompt("Quel playlist ? : "));
		if(choix <= 0 || choix > t.length) {
			console.log("Cette playlist n'existe pas.");
		} else {
			const defini = Number(choix - 1);
			const recuperation = t[defini];
			console.log(`Vous avez choisi : ${recuperation.afficher_type(2)}`);
			recuperation.afficher();
			let p = true;
			while (p) {
				remplace(`Que voulez vous faire avec ? : \nRenommer ${recuperation.afficher_type(2)} : N\nChanger de place :u:${recuperation.afficher_type(1)}: dans la playlist : P\nRevenir au menu principal : Q\nSupprimer :u:${recuperation.afficher_type(1)}: : S`);
				const demande = prompt("Faîtes un choix : ");
				switch(demande.toLowerCase()) {
					case "n" :
						const nom = prompt("Nouveau nom : ");
						const verifNom = verifier(nom);
						recuperation.changer_nom(verifNom);
						console.log(`Nouveau nom : ${recuperation.afficher_type(2)}`);
						break;
					case "p" :
						let a = true;
						let b = false;
						let a1 = true;
						let a2 = true;
						let nb3 = 0;
						let nb4 = 0;
						while (a) {
							while (a1) {
								const nb1 = Number(prompt(remplace(`Quelle place occupe :c:${recuperation.afficher_type(1)}: : `)));
								if(nb1 > 0 && nb1 <= recuperation.afficher_type(4)) {
									nb3 += nb1;
									a1 = false;
								};
								if (nb1 <= 0 || nb1 > recuperation.afficher_type(4)) {
									remplace(`La place de :c:${recuperation.afficher_type(1)}: est invalide \nCette place ce trouve entre 1 et ${(recuperation.afficher_type(4))} inclu`);
								};
							};
							while (a2) {
								const nb2 = Number(prompt("À quelle place souhaitez-vous le placer ? : "));
								if (nb2 > 0 && nb2 <= recuperation.afficher_type(4)) {
									nb4 += nb2;
									a2 = false;
									a = false;
									b = true;
								};
								if (nb2 <= 0 || nb2 > recuperation.afficher_type(4)) {
									remplace(`La place de :c:${recuperation.afficher_type(1)}: est invalide \nCette place ce trouve entre 1 et ${(recuperation.afficher_type(4))} inclu`);
								};
							};
						};
						while(b) {
							recuperation.changer_place(nb3, nb4);
							recuperation.afficher();
							
							b = false;
						};
						break;
					case "q" :
						p = false;
						c = false;
						break;
					case "s" :
						dev = true;
						p = false;
						let s = true;
						break;
					default:
					console.log("Trois choix : N / P / Q");

				};
			};
		};
	};
	while(dev) {
		console.log("Les paramètres ne sont pas encore accessible ( en cours de developpement ).\nVous allez être redirigé au menu principal.");
		dev = false;
/*		while(s) {
			
		}

					/* Paramêtres de genre */ /* Pouvoir modifier après création le genre de nom commun feminin et masculin */ /* Pouvoir ajouter ou supprimer un mot_genre 
					EX : g.push(new Genre("u", "un", "une")); */ /* appartenant aux paramêtre mais s'affichant dans le menu une possibilité de supprimer une playlist entière */
					/* appartenant au paramêtre mais s'affichant dans le menu de la playlist une possibilité de supprimer un fichier */
	};
	if (quitter) {
		console.log("Vous voilà au menu principal.");
	};
};