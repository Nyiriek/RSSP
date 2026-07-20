// const toggle = document.getElementById("menu-toggle");
// const nav = document.getElementById("nav-links");

// toggle?.addEventListener("click", () => {
//     nav.classList.toggle("active");
// });

const toggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav-links");
const header = document.querySelector(".header");

// Mobile Menu

if (toggle && nav) {
    toggle.addEventListener("click", () => {
        nav.classList.toggle("active");
    });
}

// Header Scroll Effect

window.addEventListener("scroll", () => {
    if (!header) {
        return;
    }

    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }

});

console.log("Home page loaded successfully");

console.log("About page loaded");

console.log("Platform page loaded");

console.log("Team page loaded");

/* Language Switcher dropdown */

const btn = document.getElementById("dropdownBtn");
const menu = document.getElementById("dropdownMenu");

if (btn && menu) {
    btn.addEventListener("click", function (e) {
        e.stopPropagation();
        menu.classList.toggle("show");
    });

    // close when clicking outside
    document.addEventListener("click", function () {
        menu.classList.remove("show");
    });
}

const contactForm = document.getElementById("contact-form");

if (contactForm) {

    contactForm.addEventListener("submit", async function (e) {

        e.preventDefault();

        const formData = new FormData(contactForm);

        const data = Object.fromEntries(formData.entries());

        const response = await fetch("/contact", {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify(data)

        });

        const result = await response.json();

        const status = document.getElementById("status");

        status.textContent = result.message;

        status.style.color = result.success ? "green" : "red";

        if (result.success) {
            contactForm.reset();
        }

    });

}

// donation
const donationForm = document.getElementById("donationForm");
const donationSelect = donationForm?.querySelector("select");
const customInput = donationForm?.querySelector(".custom-amount");

if (donationForm && donationSelect && customInput) {
    donationSelect.addEventListener("change", function () {
        if (this.value === "custom") {
            customInput.style.display = "block";
            customInput.required = true;
        } else {
            customInput.style.display = "none";
            customInput.required = false;
        }
    });

    donationForm.addEventListener("submit", function (e) {
        e.preventDefault();
        alert("Thank you for supporting Revive South Sudan ❤️");
        this.reset();
        customInput.style.display = "none";
        customInput.required = false;
    });
}


// i18n Language translation logic

console.log("main.js loaded");

document.addEventListener("DOMContentLoaded", () => {

    const switcher = document.getElementById("langSwitcher");

    if (!switcher) {
        return;
    }

    const translations = {
        en: {
            home: "Home",
            about: "About",
            platform: "Platform",
            team: "Team",
            manifesto: "Manifesto",
            contact: "Contact",

            hero_title: "Building a Better Tomorrow, Together",
            hero_subtitle: "Fighting for progress, equality, and opportunity for all members of our community",
            cta_platform: "See Our Platform",
            get_involved: "Get Involved ▾",

            mission_title: "Our Mission",
            mission_text: "Společně pro Černovice is dedicated to creating a more equitable, sustainable, and prosperous community for all.",

            values_title: "Our Core Values",
            value_integrity: "Integrity",
            value_integrity_text: "Acting honestly, transparently, and responsibly in service of the people.",
            value_compassion: "Compassionate Leadership",
            value_compassion_text: "Making decisions with empathy and understanding for all residents.",
            value_ethics: "Ethics",
            value_ethics_text: "Upholding fair standards and principled conduct in public life.",
            value_governance: "Good Governance",
            value_governance_text: "Building accountable institutions that serve citizens effectively.",

            events_title: "Upcoming Events",
            event_townhall_date: "Mar 15, 2026",
            event_townhall_title: "Community Town Hall",
            event_townhall_description: "Join us for an open discussion about local issues.",
            event_registration_date: "Mar 22, 2026",
            event_registration_title: "Voter Registration Drive",
            event_registration_description: "Help us register voters and make your voice heard.",
            event_education_date: "Apr 5, 2026",
            event_education_title: "Education Policy Forum",
            event_education_description: "Discussing the future of education in our community.",
            event_policy_date: "Apr 5, 2026",
            event_policy_title: "Education Policy Forum",
            event_policy_description: "Discussing the future of education in our community.",
            learn_more: "Learn More",

            leadership_title: "Meet Our Leadership",
            leader_maria_name: "Maria Rodriguez",
            leader_maria_role: "Party Chair",
            leader_maria_bio: "Former city council member with 15 years of experience.",
            leader_james_name: "James Chen",
            leader_james_role: "Vice Chair",
            leader_james_bio: "Environmental attorney and advocate for sustainability.",
            leader_sarah_name: "Sarah Johnson",
            leader_sarah_role: "Treasurer",
            leader_sarah_bio: "Certified accountant committed to transparency.",
            leader_sarah_alt_name: "Sarah Johnson",
            leader_sarah_alt_role: "Treasurer",
            leader_sarah_alt_bio: "Certified accountant committed to transparency.",
            full_team: "Meet the Full Team",

            cta_title: "Join Us in Making a Difference",
            cta_subtitle: "Your voice matters. Get involved and help shape the future of our community.",
            contact_us: "Contact Us Today",
            about_hero_title: "About Our Movement",
            about_hero_subtitle: "Building a transparent, inclusive, and progressive political future.",
            about_who_title: "Who We Are",
            about_who_text: "We are a community-driven political organization focused on improving governance, empowering citizens, and promoting sustainable development.",
            about_vision_title: "Our Vision",
            about_vision_text: "A society where every citizen has equal opportunity, access to resources, and a voice in decision-making.",
            about_mission_title: "Our Mission",
            about_mission_text: "To implement policies that prioritize people, strengthen democracy, and promote accountability in leadership.",
            platform_hero_title: "Our Political Platform",
            platform_education_title: "Education",
            platform_education_text: "Improving access to quality education for all citizens.",
            platform_healthcare_title: "Healthcare",
            platform_healthcare_text: "Affordable and accessible healthcare services.",
            platform_economy_title: "Economy",
            platform_economy_text: "Job creation and support for small businesses.",
            platform_infrastructure_title: "Infrastructure",
            platform_infrastructure_text: "Better roads, electricity, and digital access.",
            team_hero_title: "Our Leadership",
            team_leader_1_name: "Leader 1",
            team_leader_1_role: "Party Chair",
            team_leader_2_name: "Leader 2",
            team_leader_2_role: "Vice Chair",
            team_leader_3_name: "Leader 3",
            team_leader_3_role: "Secretary",
            team_leader_4_name: "Leader 1",
            team_leader_4_role: "Party Chair",
            team_leader_5_name: "Leader 2",
            team_leader_5_role: "Vice Chair",
            team_leader_6_name: "Leader 3",
            team_leader_6_role: "Secretary",
            contact_hero_title: "Contact Us",
            contact_name_placeholder: "Your Name",
            contact_email_placeholder: "Email",
            contact_message_placeholder: "Message",
            contact_send: "Send Message",
            manifesto_hero_title: "Our Manifestos",
            manifesto_hero_text: "Here you can find our party's manifestos and policy proposals.",
            donate_title: "Support Revive South Sudan",
            donate_subtitle: "Your contribution helps fund community programs, education, and outreach.",
            donate_full_name: "Full Name",
            donate_full_name_placeholder: "Enter your full name",
            donate_email: "Email Address",
            donate_email_placeholder: "Enter your email",
            donate_phone: "Phone Number (optional)",
            donate_phone_placeholder: "+211 ...",
            donate_amount: "Donation Amount (USD)",
            donate_select_amount: "Select amount",
            donate_custom_amount: "Custom Amount",
            donate_custom_amount_placeholder: "Enter custom amount",
            donate_message: "Message (optional)",
            donate_message_placeholder: "Leave a message...",
            donate: "Donate Now"
        },

        ar: {
            home: "الرئيسية",
            about: "من نحن",
            platform: "البرنامج",
            team: "الفريق",
            manifesto: "البيان",
            contact: "اتصل بنا",
            hero_title: "نبني مستقبلاً أفضل معاً",
            hero_subtitle: "نناضل من أجل التقدم والمساواة للجميع",
            cta_platform: "شاهد برنامجنا",
            get_involved: "شارك معنا ▾",
            mission_title: "مهمتنا",
            mission_text: "نهدف إلى بناء مجتمع أفضل للجميع.",
            values_title: "قيمنا",
            value_integrity: "النزاهة",
            value_integrity_text: "العمل بصدق وشفافية ومسؤولية في خدمة الشعب.",
            value_compassion: "القيادة الرحيمة",
            value_compassion_text: "اتخاذ القرارات بتعاطف وفهم لجميع السكان.",
            value_ethics: "الأخلاق",
            value_ethics_text: "التمسك بالمعايير العادلة والسلوك المبدئي في الحياة العامة.",
            value_governance: "الحوكمة",
            value_governance_text: "بناء مؤسسات مسؤولة تخدم المواطنين بفعالية.",
            events_title: "الفعاليات القادمة",
            event_townhall_date: "15 مارس 2026",
            event_townhall_title: "اجتماع مجتمعي مفتوح",
            event_townhall_description: "انضموا إلينا لنقاش مفتوح حول القضايا المحلية.",
            event_registration_date: "22 مارس 2026",
            event_registration_title: "حملة تسجيل الناخبين",
            event_registration_description: "ساعدونا في تسجيل الناخبين وإسماع أصواتكم.",
            event_education_date: "5 أبريل 2026",
            event_education_title: "منتدى سياسة التعليم",
            event_education_description: "نقاش حول مستقبل التعليم في مجتمعنا.",
            event_policy_date: "5 أبريل 2026",
            event_policy_title: "منتدى سياسة التعليم",
            event_policy_description: "نقاش حول مستقبل التعليم في مجتمعنا.",
            learn_more: "اعرف المزيد",
            leadership_title: "قيادتنا",
            leader_maria_name: "ماريا رودريغيز",
            leader_maria_role: "رئيسة الحزب",
            leader_maria_bio: "عضوة سابقة في مجلس المدينة ولديها 15 عاماً من الخبرة.",
            leader_james_name: "جيمس تشين",
            leader_james_role: "نائب الرئيسة",
            leader_james_bio: "محام بيئي ومدافع عن الاستدامة.",
            leader_sarah_name: "سارة جونسون",
            leader_sarah_role: "أمينة الصندوق",
            leader_sarah_bio: "محاسبة معتمدة ملتزمة بالشفافية.",
            leader_sarah_alt_name: "سارة جونسون",
            leader_sarah_alt_role: "أمينة الصندوق",
            leader_sarah_alt_bio: "محاسبة معتمدة ملتزمة بالشفافية.",
            full_team: "الفريق الكامل",
            cta_title: "انضم إلينا",
            cta_subtitle: "صوتك مهم",
            contact_us: "اتصل بنا",
            about_hero_title: "عن حركتنا",
            about_hero_subtitle: "نبني مستقبلاً سياسياً شفافاً وشاملاً وتقدمياً.",
            about_who_title: "من نحن",
            about_who_text: "نحن منظمة سياسية يقودها المجتمع وتركز على تحسين الحوكمة وتمكين المواطنين وتعزيز التنمية المستدامة.",
            about_vision_title: "رؤيتنا",
            about_vision_text: "مجتمع يتمتع فيه كل مواطن بفرص متساوية وإمكانية الوصول إلى الموارد وصوت في صنع القرار.",
            about_mission_title: "مهمتنا",
            about_mission_text: "تنفيذ سياسات تعطي الأولوية للناس وتقوي الديمقراطية وتعزز المساءلة في القيادة.",
            platform_hero_title: "برنامجنا السياسي",
            platform_education_title: "التعليم",
            platform_education_text: "تحسين الوصول إلى تعليم جيد لجميع المواطنين.",
            platform_healthcare_title: "الرعاية الصحية",
            platform_healthcare_text: "خدمات صحية ميسورة ومتاحة للجميع.",
            platform_economy_title: "الاقتصاد",
            platform_economy_text: "خلق فرص العمل ودعم المشاريع الصغيرة.",
            platform_infrastructure_title: "البنية التحتية",
            platform_infrastructure_text: "طرق أفضل وكهرباء ووصول رقمي.",
            team_hero_title: "قيادتنا",
            team_leader_1_name: "القائد 1",
            team_leader_1_role: "رئيس الحزب",
            team_leader_2_name: "القائد 2",
            team_leader_2_role: "نائب الرئيس",
            team_leader_3_name: "القائد 3",
            team_leader_3_role: "الأمين",
            team_leader_4_name: "القائد 1",
            team_leader_4_role: "رئيس الحزب",
            team_leader_5_name: "القائد 2",
            team_leader_5_role: "نائب الرئيس",
            team_leader_6_name: "القائد 3",
            team_leader_6_role: "الأمين",
            contact_hero_title: "اتصل بنا",
            contact_name_placeholder: "اسمك",
            contact_email_placeholder: "البريد الإلكتروني",
            contact_message_placeholder: "الرسالة",
            contact_send: "إرسال الرسالة",
            manifesto_hero_title: "بياناتنا",
            manifesto_hero_text: "هنا يمكنكم العثور على بيانات الحزب ومقترحاته السياسية.",
            donate_title: "ادعم إحياء جنوب السودان",
            donate_subtitle: "تساعد مساهمتك في تمويل البرامج المجتمعية والتعليم والتواصل.",
            donate_full_name: "الاسم الكامل",
            donate_full_name_placeholder: "أدخل اسمك الكامل",
            donate_email: "البريد الإلكتروني",
            donate_email_placeholder: "أدخل بريدك الإلكتروني",
            donate_phone: "رقم الهاتف (اختياري)",
            donate_phone_placeholder: "+211 ...",
            donate_amount: "مبلغ التبرع (دولار أمريكي)",
            donate_select_amount: "اختر المبلغ",
            donate_custom_amount: "مبلغ مخصص",
            donate_custom_amount_placeholder: "أدخل مبلغاً مخصصاً",
            donate_message: "رسالة (اختياري)",
            donate_message_placeholder: "اترك رسالة...",
            donate: "تبرع الآن"
        },

        fr: {
            home: "Accueil",
            about: "À propos",
            platform: "Programme",
            team: "Équipe",
            manifesto: "Manifeste",
            contact: "Contact",
            hero_title: "Construire un avenir meilleur",
            hero_subtitle: "Pour le progrès et l’égalité",
            cta_platform: "Voir notre programme",
            get_involved: "Participer ▾",
            mission_title: "Mission",
            mission_text: "Créer une communauté meilleure.",
            values_title: "Valeurs",
            value_integrity: "Intégrité",
            value_integrity_text: "Agir avec honnêteté, transparence et responsabilité au service du peuple.",
            value_compassion: "Leadership",
            value_compassion_text: "Prendre des décisions avec empathie et compréhension pour tous les habitants.",
            value_ethics: "Éthique",
            value_ethics_text: "Respecter des normes équitables et une conduite fondée sur des principes.",
            value_governance: "Gouvernance",
            value_governance_text: "Construire des institutions responsables qui servent efficacement les citoyens.",
            events_title: "Événements",
            event_townhall_date: "15 mars 2026",
            event_townhall_title: "Réunion publique communautaire",
            event_townhall_description: "Rejoignez-nous pour une discussion ouverte sur les enjeux locaux.",
            event_registration_date: "22 mars 2026",
            event_registration_title: "Campagne d'inscription des électeurs",
            event_registration_description: "Aidez-nous à inscrire les électeurs et à faire entendre votre voix.",
            event_education_date: "5 avril 2026",
            event_education_title: "Forum sur la politique éducative",
            event_education_description: "Discussion sur l'avenir de l'éducation dans notre communauté.",
            event_policy_date: "5 avril 2026",
            event_policy_title: "Forum sur la politique éducative",
            event_policy_description: "Discussion sur l'avenir de l'éducation dans notre communauté.",
            learn_more: "En savoir plus",
            leadership_title: "Leadership",
            leader_maria_name: "Maria Rodriguez",
            leader_maria_role: "Présidente du parti",
            leader_maria_bio: "Ancienne conseillère municipale avec 15 ans d'expérience.",
            leader_james_name: "James Chen",
            leader_james_role: "Vice-président",
            leader_james_bio: "Avocat spécialisé en environnement et défenseur du développement durable.",
            leader_sarah_name: "Sarah Johnson",
            leader_sarah_role: "Trésorière",
            leader_sarah_bio: "Comptable certifiée engagée pour la transparence.",
            leader_sarah_alt_name: "Sarah Johnson",
            leader_sarah_alt_role: "Trésorière",
            leader_sarah_alt_bio: "Comptable certifiée engagée pour la transparence.",
            full_team: "Équipe complète",
            cta_title: "Rejoignez-nous",
            cta_subtitle: "Votre voix compte",
            contact_us: "Contact",
            about_hero_title: "À propos de notre mouvement",
            about_hero_subtitle: "Construire un avenir politique transparent, inclusif et progressiste.",
            about_who_title: "Qui nous sommes",
            about_who_text: "Nous sommes une organisation politique portée par la communauté, axée sur l'amélioration de la gouvernance, l'autonomisation des citoyens et le développement durable.",
            about_vision_title: "Notre vision",
            about_vision_text: "Une société où chaque citoyen a les mêmes chances, accès aux ressources et une voix dans la prise de décision.",
            about_mission_title: "Notre mission",
            about_mission_text: "Mettre en œuvre des politiques qui donnent la priorité aux personnes, renforcent la démocratie et favorisent la responsabilité des dirigeants.",
            platform_hero_title: "Notre programme politique",
            platform_education_title: "Éducation",
            platform_education_text: "Améliorer l'accès à une éducation de qualité pour tous les citoyens.",
            platform_healthcare_title: "Santé",
            platform_healthcare_text: "Des services de santé abordables et accessibles.",
            platform_economy_title: "Économie",
            platform_economy_text: "Création d'emplois et soutien aux petites entreprises.",
            platform_infrastructure_title: "Infrastructures",
            platform_infrastructure_text: "De meilleures routes, l'électricité et l'accès numérique.",
            team_hero_title: "Notre leadership",
            team_leader_1_name: "Dirigeant 1",
            team_leader_1_role: "Président du parti",
            team_leader_2_name: "Dirigeant 2",
            team_leader_2_role: "Vice-président",
            team_leader_3_name: "Dirigeant 3",
            team_leader_3_role: "Secrétaire",
            team_leader_4_name: "Dirigeant 1",
            team_leader_4_role: "Président du parti",
            team_leader_5_name: "Dirigeant 2",
            team_leader_5_role: "Vice-président",
            team_leader_6_name: "Dirigeant 3",
            team_leader_6_role: "Secrétaire",
            contact_hero_title: "Contactez-nous",
            contact_name_placeholder: "Votre nom",
            contact_email_placeholder: "E-mail",
            contact_message_placeholder: "Message",
            contact_send: "Envoyer le message",
            manifesto_hero_title: "Nos manifestes",
            manifesto_hero_text: "Vous trouverez ici les manifestes et propositions politiques de notre parti.",
            donate_title: "Soutenir Revive South Sudan",
            donate_subtitle: "Votre contribution aide à financer les programmes communautaires, l'éducation et la sensibilisation.",
            donate_full_name: "Nom complet",
            donate_full_name_placeholder: "Entrez votre nom complet",
            donate_email: "Adresse e-mail",
            donate_email_placeholder: "Entrez votre e-mail",
            donate_phone: "Numéro de téléphone (facultatif)",
            donate_phone_placeholder: "+211 ...",
            donate_amount: "Montant du don (USD)",
            donate_select_amount: "Sélectionnez un montant",
            donate_custom_amount: "Montant personnalisé",
            donate_custom_amount_placeholder: "Entrez un montant personnalisé",
            donate_message: "Message (facultatif)",
            donate_message_placeholder: "Laissez un message...",
            donate: "Don"
        },

        sw: {
            home: "Nyumbani",
            about: "Kuhusu",
            platform: "Mpango",
            team: "Timu",
            manifesto: "Ilani",
            contact: "Mawasiliano",
            hero_title: "Kujenga kesho bora",
            hero_subtitle: "Maendeleo kwa wote",
            cta_platform: "Tazama mpango",
            get_involved: "Jiunge ▾",
            mission_title: "Dhamira",
            mission_text: "Kujenga jamii bora.",
            values_title: "Maadili",
            value_integrity: "Uadilifu",
            value_integrity_text: "Kutenda kwa uaminifu, uwazi, na uwajibikaji kwa ajili ya watu.",
            value_compassion: "Huruma",
            value_compassion_text: "Kufanya maamuzi kwa huruma na uelewa kwa wakazi wote.",
            value_ethics: "Maadili",
            value_ethics_text: "Kuzingatia viwango vya haki na mwenendo wa kanuni katika maisha ya umma.",
            value_governance: "Utawala",
            value_governance_text: "Kujenga taasisi zinazowajibika na kuhudumia wananchi kwa ufanisi.",
            events_title: "Matukio",
            event_townhall_date: "Machi 15, 2026",
            event_townhall_title: "Mkutano wa Jamii",
            event_townhall_description: "Jiunge nasi kwa majadiliano ya wazi kuhusu masuala ya eneo letu.",
            event_registration_date: "Machi 22, 2026",
            event_registration_title: "Kampeni ya Usajili wa Wapiga Kura",
            event_registration_description: "Tusaidie kusajili wapiga kura na kufanya sauti yako isikike.",
            event_education_date: "Aprili 5, 2026",
            event_education_title: "Jukwaa la Sera ya Elimu",
            event_education_description: "Majadiliano kuhusu mustakabali wa elimu katika jamii yetu.",
            event_policy_date: "Aprili 5, 2026",
            event_policy_title: "Jukwaa la Sera ya Elimu",
            event_policy_description: "Majadiliano kuhusu mustakabali wa elimu katika jamii yetu.",
            learn_more: "Soma zaidi",
            leadership_title: "Uongozi",
            leader_maria_name: "Maria Rodriguez",
            leader_maria_role: "Mwenyekiti wa Chama",
            leader_maria_bio: "Aliyekuwa mjumbe wa baraza la jiji mwenye uzoefu wa miaka 15.",
            leader_james_name: "James Chen",
            leader_james_role: "Makamu Mwenyekiti",
            leader_james_bio: "Wakili wa mazingira na mtetezi wa uendelevu.",
            leader_sarah_name: "Sarah Johnson",
            leader_sarah_role: "Mweka Hazina",
            leader_sarah_bio: "Mhasibu aliyeidhinishwa anayejitolea kwa uwazi.",
            leader_sarah_alt_name: "Sarah Johnson",
            leader_sarah_alt_role: "Mweka Hazina",
            leader_sarah_alt_bio: "Mhasibu aliyeidhinishwa anayejitolea kwa uwazi.",
            full_team: "Timu kamili",
            cta_title: "Jiunge nasi",
            cta_subtitle: "Sauti yako ni muhimu",
            contact_us: "Wasiliana",
            about_hero_title: "Kuhusu Harakati Yetu",
            about_hero_subtitle: "Kujenga mustakabali wa kisiasa wenye uwazi, ushirikishwaji, na maendeleo.",
            about_who_title: "Sisi ni Nani",
            about_who_text: "Sisi ni shirika la kisiasa linaloongozwa na jamii, linalolenga kuboresha utawala, kuwawezesha wananchi, na kukuza maendeleo endelevu.",
            about_vision_title: "Dira Yetu",
            about_vision_text: "Jamii ambako kila raia ana fursa sawa, upatikanaji wa rasilimali, na sauti katika kufanya maamuzi.",
            about_mission_title: "Dhamira Yetu",
            about_mission_text: "Kutekeleza sera zinazoweka watu mbele, kuimarisha demokrasia, na kukuza uwajibikaji katika uongozi.",
            platform_hero_title: "Mpango Wetu wa Kisiasa",
            platform_education_title: "Elimu",
            platform_education_text: "Kuboresha upatikanaji wa elimu bora kwa wananchi wote.",
            platform_healthcare_title: "Afya",
            platform_healthcare_text: "Huduma za afya zinazomudu gharama na kufikika.",
            platform_economy_title: "Uchumi",
            platform_economy_text: "Kuunda ajira na kusaidia biashara ndogo.",
            platform_infrastructure_title: "Miundombinu",
            platform_infrastructure_text: "Barabara bora, umeme, na ufikiaji wa kidijitali.",
            team_hero_title: "Uongozi Wetu",
            team_leader_1_name: "Kiongozi 1",
            team_leader_1_role: "Mwenyekiti wa Chama",
            team_leader_2_name: "Kiongozi 2",
            team_leader_2_role: "Makamu Mwenyekiti",
            team_leader_3_name: "Kiongozi 3",
            team_leader_3_role: "Katibu",
            team_leader_4_name: "Kiongozi 1",
            team_leader_4_role: "Mwenyekiti wa Chama",
            team_leader_5_name: "Kiongozi 2",
            team_leader_5_role: "Makamu Mwenyekiti",
            team_leader_6_name: "Kiongozi 3",
            team_leader_6_role: "Katibu",
            contact_hero_title: "Wasiliana Nasi",
            contact_name_placeholder: "Jina lako",
            contact_email_placeholder: "Barua pepe",
            contact_message_placeholder: "Ujumbe",
            contact_send: "Tuma Ujumbe",
            manifesto_hero_title: "Ilani Zetu",
            manifesto_hero_text: "Hapa unaweza kupata ilani za chama chetu na mapendekezo ya sera.",
            donate_title: "Saidia Revive South Sudan",
            donate_subtitle: "Mchango wako husaidia kufadhili programu za jamii, elimu, na uhamasishaji.",
            donate_full_name: "Jina Kamili",
            donate_full_name_placeholder: "Weka jina lako kamili",
            donate_email: "Anwani ya Barua Pepe",
            donate_email_placeholder: "Weka barua pepe yako",
            donate_phone: "Nambari ya Simu (hiari)",
            donate_phone_placeholder: "+211 ...",
            donate_amount: "Kiasi cha Mchango (USD)",
            donate_select_amount: "Chagua kiasi",
            donate_custom_amount: "Kiasi Maalum",
            donate_custom_amount_placeholder: "Weka kiasi maalum",
            donate_message: "Ujumbe (hiari)",
            donate_message_placeholder: "Acha ujumbe...",
            donate: "Changia"
        }
    };

    function setLanguage(lang) {
        localStorage.setItem("lang", lang);

        document.querySelectorAll("[data-i18n]").forEach(el => {
            const key = el.getAttribute("data-i18n");

            if (translations[lang]?.[key]) {
                el.textContent = translations[lang][key];
            }
        });

        document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
            const key = el.getAttribute("data-i18n-placeholder");

            if (translations[lang]?.[key]) {
                el.setAttribute("placeholder", translations[lang][key]);
            }
        });

        document.documentElement.lang = lang;
        document.documentElement.dir = (lang === "ar") ? "rtl" : "ltr";
    }

    switcher.addEventListener("change", (e) => {
        setLanguage(e.target.value);
    });

    const saved = localStorage.getItem("lang") || "en";
    switcher.value = saved;
    setLanguage(saved);

});


//image slider logic
const slides = document.querySelectorAll(".slide");

if (slides.length > 0) {

    let currentSlide = 0;

    setInterval(() => {

        slides[currentSlide].classList.remove("active");

        currentSlide++;

        if (currentSlide >= slides.length) {
            currentSlide = 0;
        }

        slides[currentSlide].classList.add("active");

    }, 5000);

}
