import React from 'react';
import BgImg from '../assets/bg.png'; // Ensure this path is correct
import WordSection from '../components/WordSection';
import Navbar from '../components/Navbar';

const engineeringWords = [
  { tamil: 'மின்னியல்', english: 'Electronics' },
  { tamil: 'வெப்பவியல்', english: 'Thermodynamics' },
  { tamil: 'தொழில்நுட்பம்', english: 'Technology' },
  { tamil: 'மின்னணுவியல்', english: 'Microelectronics' },
  { tamil: 'வலையமைப்பு', english: 'Networking' },
  { tamil: 'தொடரமைப்பு', english: 'Architecture' },
  { tamil: 'தரவுத்தொகுப்பு', english: 'Database' },
  { tamil: 'கணித மாதிரி', english: 'Algorithm' },
  { tamil: 'தானியங்கி', english: 'Automation' },
  { tamil: 'பொறியியலாளர்', english: 'Engineer' },
];

const medicalWords = [
  { tamil: 'மருத்துவர்', english: 'Doctor' },
  { tamil: 'நோயாளி', english: 'Patient' },
  { tamil: 'மருந்து', english: 'Medicine' },
  { tamil: 'நரம்பியல்', english: 'Neurology' },
  { tamil: 'இரத்த அழுத்தம்', english: 'Blood Pressure' },
  { tamil: 'வயிற்று நோய்', english: 'Gastroenterology' },
  { tamil: 'இதய நோய்', english: 'Cardiology' },
  { tamil: 'மூளை சிகிச்சை', english: 'Brain Surgery' },
  { tamil: 'அருவை சிகிச்சை', english: 'Surgery' },
  { tamil: 'மூளை', english: 'Brain' },
  { tamil: 'மார்பகம்', english: 'Chest' },
  { tamil: 'வயிறு', english: 'Stomach' },
  { tamil: 'அளவீட்டுச் சாதனம்', english: 'Diagnostic Tool' },
  { tamil: 'வலிப்பு', english: 'Spasm' },
  { tamil: 'நுண்ணுயிரியல்', english: 'Microbiology' },
{ tamil: 'மருத்துவமனை', english: 'Hospital' },
  { tamil: 'அறிகுறி', english: 'Symptom' },
  { tamil: 'மருந்தறை', english: 'Pharmacy' },
  { tamil: 'இரத்த பரிசோதனை', english: 'Blood Test' },
  { tamil: 'மனையநோயியல்', english: 'Psychiatry' },
  { tamil: 'புற்றுநோய்', english: 'Cancer' },
  { tamil: 'தசை', english: 'Muscle' },
  { tamil: 'மருந்தளவு', english: 'Dosage' },
  { tamil: 'கண்ணடைத்தல்', english: 'Anesthesia' },
  { tamil: 'திடஅமைப்பு', english: 'Skeleton' },
  { tamil: 'நுரையீரல்', english: 'Lung' },
  { tamil: 'மாதவிடாய்', english: 'Menstruation' },
  { tamil: 'கருவுற்ற நிலை', english: 'Pregnancy' },
  { tamil: 'மூட்டு வலி', english: 'Joint Pain' },
  { tamil: 'நோய் தடுப்பூசி', english: 'Vaccine' },

];

const civilEngineeringWords = [
  { tamil: 'கட்டிடம்', english: 'Building' },
  { tamil: 'படிவமைப்பு', english: 'Design' },
  { tamil: 'அடித்தளம்', english: 'Foundation' },
  { tamil: 'தரைத்தள மதிப்பு', english: 'Soil Evaluation' },
  { tamil: 'கட்டுமானம்', english: 'Construction' },
  { tamil: 'நீராவி வழிகாட்டி', english: 'Drainage' },
  { tamil: 'மாவட்ட வரைபடம்', english: 'Zoning Map' },
  { tamil: 'நில அளவை', english: 'Surveying' },
  { tamil: 'கம்பிகள்', english: 'Reinforcement' },
  { tamil: 'திடக்கட்டிடம்', english: 'Structure' },
{ tamil: 'திடப்பொதி', english: 'Concrete' },
  { tamil: 'துரிதக் கட்டுமானம்', english: 'Precast Construction' },
  { tamil: 'நீர் நிலை', english: 'Water Table' },
  { tamil: 'மணல் சோதனை', english: 'Sand Test' },
  { tamil: 'சிமெந்து', english: 'Cement' },
  { tamil: 'பளு', english: 'Beam' },
  { tamil: 'மெத்த வாயில்', english: 'Arch' },
  { tamil: 'வளைவு தரம்', english: 'Bending Moment' },
  { tamil: 'மொத்த சுமை', english: 'Total Load' },
  { tamil: 'நிலக்குத்தல்', english: 'Pile Driving' },
];

const mechanicalEngineeringWords = [
  { tamil: 'இயந்திரவியல்', english: 'Mechanics' },
  { tamil: 'விளிம்பு இயக்கி', english: 'Actuator' },
  { tamil: 'அச்சு', english: 'Shaft' },
  { tamil: 'துடுப்புச் சக்கரம்', english: 'Flywheel' },
  { tamil: 'வெப்ப மாற்றி', english: 'Heat Exchanger' },
  { tamil: 'இயந்திரம்', english: 'Machine' },
  { tamil: 'ஊக்கி', english: 'Compressor' },
  { tamil: 'சுழற்சி இயக்கம்', english: 'Rotary Motion' },
  { tamil: 'தானியங்கி அமைப்பு', english: 'Automation System' },
  { tamil: 'தாக்கம் மற்றும் அழுத்தம்', english: 'Force and Pressure' },
{ tamil: 'விசை', english: 'Force' },
  { tamil: 'வேகம்', english: 'Velocity' },
  { tamil: 'மின்மOTORு', english: 'Motor' },
  { tamil: 'தாழ்வுச்சுழற்சி', english: 'Low Cycle' },
  { tamil: 'சுழற்சி பம்ப்', english: 'Centrifugal Pump' },
  { tamil: 'தண்ணீர் சுழற்சி', english: 'Water Circulation' },
  { tamil: 'வெப்ப இயக்கவியல்', english: 'Thermal Dynamics' },
  { tamil: 'பலகை வட்டம்', english: 'Plate Clutch' },
  { tamil: 'காற்றழுத்தக் குழாய்', english: 'Pneumatic Pipe' },
  { tamil: 'திறன் பரிசோதனை', english: 'Efficiency Test' },
];

const computerScienceWords = [
  { tamil: 'நிரலாக்க மொழி', english: 'Programming Language' },
  { tamil: 'நுட்ப பயன்பாடு', english: 'Application Software' },
  { tamil: 'இணைய சேவையகம்', english: 'Web Server' },
  { tamil: 'இணைய இடைமுகம்', english: 'Web Interface' },
  { tamil: 'மின்னணு கணினி', english: 'Digital Computer' },
  { tamil: 'மின்னழுத்த காப்பு', english: 'Firewall' },
  { tamil: 'தொடர்முறை', english: 'Protocol' },
  { tamil: 'தகவல் பகுப்பாய்வு', english: 'Data Analysis' },
  { tamil: 'கணினி பிழைதிருத்தம்', english: 'Debugging' },
  { tamil: 'கணினி நினைவகம்', english: 'Memory' },
{ tamil: 'தரவுகள்', english: 'Data' },
  { tamil: 'மென்பொருள்', english: 'Software' },
  { tamil: 'வன்பொருள்', english: 'Hardware' },
  { tamil: 'தகவல் பாதுகாப்பு', english: 'Cybersecurity' },
  { tamil: 'தரவுத் திட்டம்', english: 'Data Structure' },
  { tamil: 'மூலக் குறியீடு', english: 'Source Code' },
  { tamil: 'நிரலாக்கம்', english: 'Programming' },
  { tamil: 'நெட்வொர்க் பாதுகாப்பு', english: 'Network Security' },
  { tamil: 'இணைய பயன்பாடு', english: 'Web Application' },
  { tamil: 'கணினி தரவுத்தளம்', english: 'Cloud Computing' },
];

const artsWords = [
  { tamil: 'சிற்பம்', english: 'Sculpture' },
  { tamil: 'சித்திரம்', english: 'Painting' },
  { tamil: 'இசை', english: 'Music' },
  { tamil: 'நாடகம்', english: 'Drama' },
  { tamil: 'நடனம்', english: 'Dance' },
  { tamil: 'வண்ணக் கலை', english: 'Visual Art' },
  { tamil: 'பாரம்பரிய இசை', english: 'Classical Music' },
  { tamil: 'சமூகவியல்', english: 'Sociology' },
  { tamil: 'மொழிபெயர்ப்பு', english: 'Translation' },
  { tamil: 'பன்மொழி', english: 'Multilingual' },
  { tamil: 'உரைநடை', english: 'Prose' },
  { tamil: 'கவிதை', english: 'Poetry' },
{ tamil: 'உருவாக்கம்', english: 'Creation' },
  { tamil: 'அழகு உணர்வு', english: 'Aesthetics' },
  { tamil: 'படக்கருத்து', english: 'Concept Art' },
  { tamil: 'ஒளிப்படக் கலை', english: 'Photography' },
  { tamil: 'இலக்கியம்', english: 'Literature' },
  { tamil: 'அரங்கக்கலை', english: 'Theatre Arts' },
  { tamil: 'பாரம்பரிய நடனம்', english: 'Traditional Dance' },
  { tamil: 'சமய கலை', english: 'Religious Art' },
  { tamil: 'கோலம்', english: 'Rangoli' },
  { tamil: 'கைவினைக் கலை', english: 'Handicrafts' },
  { tamil: 'பொம்மலாட்டம்', english: 'Puppetry' },
  { tamil: 'வசனக் கலை', english: 'Scriptwriting' },
  { tamil: 'கலை விமர்சனம்', english: 'Art Criticism' },
  { tamil: 'பாடலாசிரியர்', english: 'Lyricist' },
  { tamil: 'தழுவல் இசை', english: 'Fusion Music' },
];

const scienceWords = [
  { tamil: 'விண்ணியல்', english: 'Astronomy' },
  { tamil: 'இரசாயனவியல்', english: 'Chemistry' },
  { tamil: 'உயிரியல்', english: 'Biology' },
  { tamil: 'கணிதவியல்', english: 'Mathematics' },
  { tamil: 'பயர்ச்சியியல்', english: 'Physics' },
  { tamil: 'அணு', english: 'Atom' },
  { tamil: 'மூலக்கூறு', english: 'Molecule' },
  { tamil: 'வானிலை', english: 'Climate' },
  { tamil: 'அளவியல்', english: 'Metrology' },
  { tamil: 'நிலவியல்', english: 'Geology' },
  { tamil: 'சோதனைக்கூடம்', english: 'Laboratory' },
  { tamil: 'ஆவியியல்', english: 'Evaporation Science' },
  { tamil: 'பரிசோதனை', english: 'Experiment' },
  { tamil: 'தொழில்நுட்ப அறிவியல்', english: 'Applied Science' },
{ tamil: 'அறிவியல் ஆய்வு', english: 'Scientific Research' },
  { tamil: 'மின்னியக்கவியல்', english: 'Electrodynamics' },
  { tamil: 'புவியியல்', english: 'Geography' },
  { tamil: 'சுழற்சி விளைவுகள்', english: 'Centrifugal Effects' },
  { tamil: 'பரிமாணம்', english: 'Dimension' },
  { tamil: 'அறிவியல் கருவி', english: 'Scientific Instrument' },
  { tamil: 'பரிமாற்றவியல்', english: 'Thermodynamics' },
  { tamil: 'அணு உலை', english: 'Nuclear Reactor' },
  { tamil: 'மின்னியல்', english: 'Electricity' },
  { tamil: 'நிலக்கரியியல்', english: 'Petrology' },
  { tamil: 'தாவரவியல்', english: 'Botany' },
  { tamil: 'விலங்கியல்', english: 'Zoology' },
  { tamil: 'துகளியல்', english: 'Particle Physics' },
  { tamil: 'ஆற்றல் மாறும் சூழ்நிலை', english: 'Energy Transformation' },
  { tamil: 'மிக்ரோஸ்கோப்', english: 'Microscope' },
];
const architectureWords = [
  { tamil: 'கட்டிடக் கலை', english: 'Architecture' },
  { tamil: 'அடித்தளம்', english: 'Foundation' },
  { tamil: 'மாடி', english: 'Storey' },
  { tamil: 'புரவலர்', english: 'Architect' },
  { tamil: 'வாயில்', english: 'Entrance' },
  { tamil: 'கம்பம்', english: 'Pillar' },
  { tamil: 'அரங்கம்', english: 'Auditorium' },
  { tamil: 'மண்டபம்', english: 'Hall/Pavilion' },
  { tamil: 'பிரவேசவாயில்', english: 'Main Gate' },
  { tamil: 'மணிமண்டபம்', english: 'Tower Pavilion' },
  { tamil: 'நுழைவுவழி', english: 'Passage' },
  { tamil: 'வளர்ச்சி நுட்பம்', english: 'Development Design' },
  { tamil: 'கட்டுமான நுட்பம்', english: 'Construction Technique' },
  { tamil: 'கல்யாண மண்டபம்', english: 'Marriage Hall' },
];

const literatureWords = [
  { tamil: 'இலக்கியம்', english: 'Literature' },
  { tamil: 'கவிதை', english: 'Poetry' },
  { tamil: 'நாவல்', english: 'Novel' },
  { tamil: 'கதை', english: 'Story' },
  { tamil: 'உரைநடை', english: 'Prose' },
  { tamil: 'வாசகம்', english: 'Speech/Text' },
  { tamil: 'முற்றுப் பாட்டு', english: 'Epic Poem' },
  { tamil: 'சங்க இலக்கியம்', english: 'Sangam Literature' },
  { tamil: 'தத்துவ இலக்கியம்', english: 'Philosophical Literature' },
  { tamil: 'உவமை', english: 'Simile' },
  { tamil: 'இணைப்பு', english: 'Alliteration' },
  { tamil: 'விளக்கம்', english: 'Explanation' },
  { tamil: 'உரையாச்சி', english: 'Interpretation' },
  { tamil: 'சிறுகதை', english: 'Short Story' },
  { tamil: 'நாடகம்', english: 'Drama' },
];

const sculptureWords = [
  { tamil: 'சிற்பம்', english: 'Sculpture' },
  { tamil: 'பாறைச்சிற்பம்', english: 'Rock Sculpture' },
  { tamil: 'உலோகம்', english: 'Metal' },
  { tamil: 'விக்ரகம்', english: 'Idol' },
  { tamil: 'நாகரிக சிற்பம்', english: 'Urban Sculpture' },
  { tamil: 'பொற்கலந்த சிற்பம்', english: 'Gold Plated Sculpture' },
  { tamil: 'தொட்டில்ச் சிற்பம்', english: 'Relief Sculpture' },
  { tamil: 'சிற்ப வடிவமைப்பு', english: 'Sculptural Design' },
  { tamil: 'உருவாக்கும் தொழில்', english: 'Craftsmanship' },
  { tamil: 'உரைத்தல்', english: 'Carving' },
  { tamil: 'உருக்க விக்ரகம்', english: 'Molten Idol' },
  { tamil: 'அமைப்பியல் சிற்பம்', english: 'Structural Sculpture' },
  { tamil: 'பூமி மேற்பரப்பு சிற்பம்', english: 'Surface Sculpture' },
  { tamil: 'சிற்பக் கலைஞர்', english: 'Sculptor' },
  { tamil: 'முலாம்', english: 'Coating (on Sculpture)' },
];

const sangamAgeWords = [
  { tamil: 'சங்க காலம்', english: 'Sangam Age' },
  { tamil: 'முதற்சங்கம்', english: 'First Sangam' },
  { tamil: 'இரண்டாம் சங்கம்', english: 'Second Sangam' },
  { tamil: 'மூன்றாம் சங்கம்', english: 'Third Sangam' },
  { tamil: 'சங்கப் பாடல்கள்', english: 'Sangam Poems' },
  { tamil: 'புறநானூறு', english: 'Purananuru' },
  { tamil: 'ஐங்குறுநூறு', english: 'Ainkurunuru' },
  { tamil: 'அகம்', english: 'Inner (Love Themes)' },
  { tamil: 'புறம்', english: 'Outer (War Themes)' },
  { tamil: 'திருக்குறள்', english: 'Thirukkural' },
  { tamil: 'பரிபாடல்', english: 'Paripadal' },
  { tamil: 'நாடுகொண்டு சேர்ந்தோர்', english: 'Confederated Kings' },
  { tamil: 'வெற்றிக்கிளை', english: 'Victory Garland' },
  { tamil: 'மலைநாடு', english: 'Hill Country' },
  { tamil: 'மருதநாடு', english: 'Fertile Plains' },
];

const templeArchitectureWords = [
  { tamil: 'கோயில்', english: 'Temple' },
  { tamil: 'கோபுரம்', english: 'Tower' },
  { tamil: 'விமானம்', english: 'Sanctum Tower' },
  { tamil: 'அர்த்தமண்டபம்', english: 'Inner Hall' },
  { tamil: 'மகாமண்டபம்', english: 'Great Hall' },
  { tamil: 'திருவாசல்', english: 'Sacred Gateway' },
  { tamil: 'துவாரபாலகர்', english: 'Guardian Deities' },
  { tamil: 'உற்சவமண்டபம்', english: 'Festival Pavilion' },
  { tamil: 'பிராகாரம்', english: 'Temple Corridor' },
  { tamil: 'நண்டி மண்டபம்', english: 'Nandi Hall' },
  { tamil: 'அம்பலம்', english: 'Sacred Stage' },
  { tamil: 'வழிபாட்டு வீதி', english: 'Procession Street' },
  { tamil: 'வழிபாட்டு சாலை', english: 'Circumambulatory Path' },
  { tamil: 'அர்த்த மண்டபம்', english: 'Entrance Hall' },
  { tamil: 'கருவறை', english: 'Sanctum Sanctorum' },
];

const biologyWords = [
  { tamil: 'உயிரியல்', english: 'Biology' },
  { tamil: 'செல்', english: 'Cell' },
  { tamil: 'மூலக்கூறு', english: 'Molecule' },
  { tamil: 'உயிரணு', english: 'Protoplasm' },
  { tamil: 'மண்டலம்', english: 'Nucleus' },
  { tamil: 'இனவியல்', english: 'Genetics' },
  { tamil: 'தாவரவியல்', english: 'Botany' },
  { tamil: 'விலங்கியல்', english: 'Zoology' },
  { tamil: 'உயிரி', english: 'Organism' },
  { tamil: 'இரத்த அணுக்கள்', english: 'Blood Cells' },
  { tamil: 'நரம்பியல்', english: 'Neurology' },
  { tamil: 'உயிரணு பிரிதல்', english: 'Cell Division' },
  { tamil: 'மார்பு எலும்பு', english: 'Rib Cage' },
  { tamil: 'இரத்த ஓட்டம்', english: 'Blood Circulation' },
  { tamil: 'மனித உடல் அமைப்பு', english: 'Human Anatomy' },
];


const tamilMusicInstrumentsWords = [
  { tamil: 'யாழ்', english: 'Yazh' },
  { tamil: 'பறை', english: 'Parai' },
  { tamil: 'உடுக்கை', english: 'Udukkai' },
  { tamil: 'மிருதங்கம்', english: 'Mridangam' },
  { tamil: 'நாதஸ்வரம்', english: 'Nadaswaram' },
  { tamil: 'தவில்', english: 'Thavil' },
  { tamil: 'சுடுகாடு பறை', english: 'Funeral Drum' },
  { tamil: 'வீணை', english: 'Veena' },
  { tamil: 'கஞ்சிரா', english: 'Kanjira' },
  { tamil: 'வாத்யக் கருவி', english: 'Musical Instrument' },
  { tamil: 'புல்லாங்குழல்', english: 'Flute' },
  { tamil: 'கொம்பு', english: 'Kombu (Horn)' },
  { tamil: 'பெரிய பரை', english: 'Big Drum' },
  { tamil: 'பண்', english: 'Melody Type (Pan)' },
  { tamil: 'ஓசை', english: 'Sound' },
];

const ancientWeaponsWords = [
  { tamil: 'வாள்', english: 'Sword' },
  { tamil: 'கவசம்', english: 'Shield' },
  { tamil: 'வாயு ஆயுதம்', english: 'Bow and Arrow' },
  { tamil: 'குதிரை வேட்டை', english: 'Horseback Archery' },
  { tamil: 'மாளிகை ஆயுதம்', english: 'Mace' },
  { tamil: 'திரட்டி', english: 'Spear' },
  { tamil: 'புயல் ஆயுதம்', english: 'Storm Weapon' },
  { tamil: 'சிறிய ஆயுதம்', english: 'Dagger' },
  { tamil: 'தளபாடம்', english: 'Armor' },
  { tamil: 'சிறுத்து', english: 'Chariot' },
  { tamil: 'பிரயோகம்', english: 'Catapult' },
  { tamil: 'பள்ளி', english: 'Shield' },
  { tamil: 'தண்டி', english: 'Club (Weapon)' },
  { tamil: 'நாகச்சிறுக்கி', english: 'Mace' },
  { tamil: 'தண்டமருவல்', english: 'Battle Ax' },
];

const agricultureWords = [
  { tamil: 'விவசாயம்', english: 'Agriculture' },
  { tamil: 'பழக்கியல்', english: 'Horticulture' },
  { tamil: 'புதிர்', english: 'Seedling' },
  { tamil: 'போசணி', english: 'Fertilizer' },
  { tamil: 'பாதிகம்', english: 'Plough' },
  { tamil: 'நீர் திறப்பு', english: 'Irrigation' },
  { tamil: 'பாசனம்', english: 'Watering' },
  { tamil: 'உழவு', english: 'Ploughing' },
  { tamil: 'சேதி', english: 'Harvest' },
  { tamil: 'புழுங்கு', english: 'Manure' },
  { tamil: 'மின் உழவு', english: 'Electric Plowing' },
  { tamil: 'காரிகை', english: 'Cultivation' },
  { tamil: 'உணவு பயிர்கள்', english: 'Food Crops' },
  { tamil: 'பசும்பொன்', english: 'Green Manure' },
  { tamil: 'வளையம்', english: 'Agricultural Field' },
];

const weavingCraftsWords = [
  { tamil: 'நெசவு', english: 'Weaving' },
  { tamil: 'பட்டு', english: 'Silk' },
  { tamil: 'சித்தி', english: 'Weaving Frame' },
  { tamil: 'தருவாள்', english: 'Spindle' },
  { tamil: 'கைவினை', english: 'Handicrafts' },
  { tamil: 'உலகம்', english: 'Loom' },
  { tamil: 'பருத்தி', english: 'Cotton' },
  { tamil: 'தனை', english: 'Thread' },
  { tamil: 'பட்டு நெசவு', english: 'Silk Weaving' },
  { tamil: 'மண்ணை', english: 'Clay' },
  { tamil: 'தாலி', english: 'Saree Brocade' },
  { tamil: 'புரட்டல்', english: 'Embroidery' },
  { tamil: 'கட்டர்', english: 'Scissors' },
  { tamil: 'வெப்பநிலை', english: 'Climate (Effect on Weaving)' },
  { tamil: 'பொதுவான அழகு', english: 'Common Beauty (Decorative Work)' },
];

const tamilGrammarWords = [
  { tamil: 'தமிழ் இலக்கணம்', english: 'Tamil Grammar' },
  { tamil: 'சந்தி', english: 'Sandhi' },
  { tamil: 'செய்யொற்றை', english: 'Verb Root' },
  { tamil: 'நிலை', english: 'Tense' },
  { tamil: 'அகர முதல', english: 'Alphabet Beginning' },
  { tamil: 'இகழ்வு', english: 'Conjugation' },
  { tamil: 'உருவாக்கம்', english: 'Formation' },
  { tamil: 'சட்டம்', english: 'Rule' },
  { tamil: 'பாடல்', english: 'Verse' },
  { tamil: 'விரிசி', english: 'Literary Form' },
  { tamil: 'நூற்றுப் பாட்டு', english: 'Hundred Verse' },
  { tamil: 'துதிகொள்', english: 'Eulogy' },
  { tamil: 'தொடர்ச்சி', english: 'Continuity' },
  { tamil: 'அட்டவணை', english: 'Table of Syntax' },
  { tamil: 'நூலகம்', english: 'Literary System' },
];

const templeDecorWords = [
  { tamil: 'தூண்களம்', english: 'Pillar Carvings' },
  { tamil: 'மகுடம்', english: 'Crown Decoration' },
  { tamil: 'தோரணம்', english: 'Festoon' },
  { tamil: 'கோவில் விளக்கு', english: 'Temple Lamp' },
  { tamil: 'விலக்கு மேடை', english: 'Lamp Stand' },
  { tamil: 'மாலைகள்', english: 'Garlands' },
  { tamil: 'திருக்கோலம்', english: 'Sacred Decoration' },
  { tamil: 'தங்க அலை', english: 'Gold Plating' },
  { tamil: 'சங்கு சக்கரம்', english: 'Conch and Disc Symbol' },
  { tamil: 'தாமரை மேடை', english: 'Lotus Pedestal' },
  { tamil: 'நவ ரத்தினங்கள்', english: 'Navaratnas (Nine Gems)' },
  { tamil: 'வெண் பட்டு', english: 'White Silk' },
  { tamil: 'பச்சை கொடி', english: 'Green Flag' },
  { tamil: 'பிரம்மோத்சவ அலங்காரம்', english: 'Brahmotsavam Decoration' },
  { tamil: 'நீராட்டுத் திருவிழா', english: 'Holy Bath Festival' },
];

const physicsChemWords = [
  { tamil: 'இயற்பியல்', english: 'Physics' },
  { tamil: 'இரசாயனவியல்', english: 'Chemistry' },
  { tamil: 'மின்னழுத்தம்', english: 'Voltage' },
  { tamil: 'மின்னோட்டம்', english: 'Electric Current' },
  { tamil: 'அதிர்வெண்', english: 'Frequency' },
  { tamil: 'திரிசூல ஒளி', english: 'Spectrum' },
  { tamil: 'துணை அணு', english: 'Isotope' },
  { tamil: 'அணு எண்', english: 'Atomic Number' },
  { tamil: 'மூலக்கூறு', english: 'Molecule' },
  { tamil: 'சேர்க்கை', english: 'Compound' },
  { tamil: 'கம்பவாய்', english: 'Capacitor' },
  { tamil: 'ஒளிர்வு', english: 'Luminescence' },
  { tamil: 'வளிமம்', english: 'Gas' },
  { tamil: 'திடப் பசை', english: 'Solid Bond' },
  { tamil: 'இயக்க சக்தி', english: 'Kinetic Energy' },
];

const dramaWords = [
  { tamil: 'நாடகம்', english: 'Drama' },
  { tamil: 'வேடம்', english: 'Costume' },
  { tamil: 'பாங்கு', english: 'Style/Mode' },
  { tamil: 'அரங்கம்', english: 'Stage' },
  { tamil: 'கோலச் சாயம்', english: 'Makeup' },
  { tamil: 'பத்திரிகை', english: 'Script' },
  { tamil: 'நடிப்பு', english: 'Acting' },
  { tamil: 'வசனம்', english: 'Dialogue' },
  { tamil: 'பாவை நாடகம்', english: 'Puppet Show' },
  { tamil: 'பாரம்பரிய நாடகம்', english: 'Traditional Drama' },
  { tamil: 'கலைஞன்', english: 'Artist/Actor' },
  { tamil: 'தாரகை', english: 'Lead Actress' },
  { tamil: 'வசன ஆசிரியர்', english: 'Dialogue Writer' },
  { tamil: 'இயக்குநர்', english: 'Director' },
  { tamil: 'இசைக்கருவி', english: 'Musical Accompaniment' },
];
const kalvettuWords = [
  { tamil: 'கல்வெட்டு', english: 'Inscription' },
  { tamil: 'உரைகல்', english: 'Stone Slab' },
  { tamil: 'உரையிடல்', english: 'Engraving' },
  { tamil: 'திருத்தல்', english: 'Rectification' },
  { tamil: 'பேருரு', english: 'Granite Stone' },
  { tamil: 'மெய்ப்பொருள்', english: 'Authenticity' },
  { tamil: 'வழங்கல்', english: 'Donation (recorded)' },
  { tamil: 'சங்க பரம்பரை', english: 'Sangam Lineage' },
  { tamil: 'நிகழ்ச்சி பதிவு', english: 'Event Record' },
  { tamil: 'இழைபிணைவு எழுத்து', english: 'Ligature Script' },
  { tamil: 'நிரல் எழுத்து', english: 'Script Order' },
  { tamil: 'ஆணை கல்வெட்டு', english: 'Royal Edict' },
  { tamil: 'நிதி பதிவு', english: 'Treasury Record' },
];

const traditionalArtsWords = [
  { tamil: 'பாரம்பரிய கலை', english: 'Traditional Art' },
  { tamil: 'கொலம்', english: 'Kolam (Rangoli)' },
  { tamil: 'தொல்பாவைக் கூத்து', english: 'Shadow Puppetry' },
  { tamil: 'பொம்மலாட்டம்', english: 'Doll Show' },
  { tamil: 'மரச்சிற்பம்', english: 'Wood Sculpture' },
  { tamil: 'பட்டக்கலை', english: 'Silk Painting' },
  { tamil: 'தையல்', english: 'Embroidery' },
  { tamil: 'சங்கீதம்', english: 'Music' },
  { tamil: 'நாட்டியக் கலை', english: 'Dance Art' },
  { tamil: 'சாயக்கலை', english: 'Dyeing Art' },
  { tamil: 'படக்கலை', english: 'Visual Art' },
  { tamil: 'தோலெழுத்து', english: 'Leather Craft' },
  { tamil: 'கலையோவியம்', english: 'Art Drawing' },
  { tamil: 'பொன் வேலை', english: 'Gold Work' },
  { tamil: 'கைவினைப் பொருள்', english: 'Handcrafted Item' },
];

const softwareProgrammingWords = [
  { tamil: 'மென்பொருள்', english: 'Software' },
  { tamil: 'மூலக்குறியீடு', english: 'Source Code' },
  { tamil: 'நிரலாக்கம்', english: 'Programming' },
  { tamil: 'தளமை', english: 'Platform' },
  { tamil: 'முறையியல்', english: 'Logic' },
  { tamil: 'மின்னஞ்சல்', english: 'Email' },
  { tamil: 'தள வடிவமைப்பு', english: 'Web Design' },
  { tamil: 'மாற்றாலி', english: 'Compiler' },
  { tamil: 'மூல நிரல்', english: 'Raw Code' },
  { tamil: 'பிழைநீக்கம்', english: 'Debugging' },
  { tamil: 'செயல்பாடு', english: 'Function' },
  { tamil: 'செயற்கூறு', english: 'Syntax' },
  { tamil: 'நிரல் தொகுப்பு', english: 'Code Library' },
  { tamil: 'வழிச்செலுத்தி', english: 'Router (Code Logic)' },
  { tamil: 'பயனர் இடைமுகம்', english: 'User Interface (UI)' },
];

const mobileInternetWords = [
  { tamil: 'அலைபேசி', english: 'Mobile Phone' },
  { tamil: 'இணையம்', english: 'Internet' },
  { tamil: 'செயலி', english: 'App' },
  { tamil: 'தரவெடுப்பு', english: 'Download' },
  { tamil: 'தரவு அனுப்பு', english: 'Upload' },
  { tamil: 'முகநூல்', english: 'Facebook' },
  { tamil: 'மின்னஞ்சல் முகவரி', english: 'Email Address' },
  { tamil: 'உலாவி', english: 'Browser' },
  { tamil: 'வலைத்தளம்', english: 'Website' },
  { tamil: 'மின்னஞ்சல் வழங்கி', english: 'Email Server' },
  { tamil: 'இணையவழி வகுப்பு', english: 'Online Class' },
  { tamil: 'பேச்சு பயன்பாடு', english: 'Messaging App' },
  { tamil: 'அடையாளச் சான்று', english: 'Authentication' },
  { tamil: 'முழுமையான இணையம்', english: 'Full Stack Web' },
  { tamil: 'இணைய பாதுகாப்பு', english: 'Internet Security' },
];


const aiWords = [
  { tamil: 'செயற்கை நுண்ணறிவு', english: 'Artificial Intelligence' },
  { tamil: 'இயந்திர கற்றல்', english: 'Machine Learning' },
  { tamil: 'தானாக செயல்படுதல்', english: 'Autonomy' },
  { tamil: 'தரவுப் பகுப்பாய்வு', english: 'Data Analysis' },
  { tamil: 'புதிதாக்கம்', english: 'Innovation' },
  { tamil: 'முன்கணிப்பு', english: 'Prediction' },
  { tamil: 'பார்வை அறிவியல்', english: 'Computer Vision' },
  { tamil: 'தானியங்கி அமைப்பு', english: 'Automated System' },
  { tamil: 'தொழில் நுட்ப நுண்ணறிவு', english: 'Tech Intelligence' },
  { tamil: 'தோற்றம் அறிதல்', english: 'Pattern Recognition' },
  { tamil: 'படைப்பு நுண்ணறிவு', english: 'Generative AI' },
  { tamil: 'நிகழ்வுப் பகுப்பாய்வு', english: 'Event Analysis' },
  { tamil: 'புரிதல்', english: 'Understanding (NLP)' },
  { tamil: 'அறிவு மேம்பாடு', english: 'Knowledge Processing' },
  { tamil: 'வலை நுண்ணறிவு', english: 'Web Intelligence' },
];

const dataAnalyticsWords = [
  { tamil: 'தரவு', english: 'Data' },
  { tamil: 'புள்ளிவிவரம்', english: 'Statistics' },
  { tamil: 'விளக்கக்குறிப்பு', english: 'Dashboard' },
  { tamil: 'நுணுக்க பகுப்பாய்வு', english: 'Detailed Analysis' },
  { tamil: 'பட்டியல்', english: 'Dataset' },
  { tamil: 'சுருக்கம்', english: 'Summary' },
  { tamil: 'மாற்று எண்ணிக்கை', english: 'Alternate Value' },
  { tamil: 'நெறிமுறை', english: 'Protocol' },
  { tamil: 'கோப்பகம்', english: 'Repository' },
  { tamil: 'மின்னணு பட்டியல்', english: 'Spreadsheet' },
  { tamil: 'புள்ளி வரைபடம்', english: 'Graph' },
  { tamil: 'இயக்க மாதிரிகள்', english: 'Modeling Techniques' },
  { tamil: 'அளவீடு கருவி', english: 'Measurement Tool' },
  { tamil: 'அடிப்படை விவரங்கள்', english: 'Metadata' },
  { tamil: 'திறன் கணிப்பு', english: 'Performance Metrics' },
];










const Directionary = () => {
  return (
    <div
      style={{ backgroundImage: `url(${BgImg})` }}
      className="bg-cover bg-center min-h-screen  "
    >
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navbar />
      </div>
      <div className="bg-black bg-opacity-20 mt-10 p-8 md:p-16 rounded-xl shadow-2xl w-full max-w-6xl mx-auto">
        <WordSection title="Engineering Dictionary" words={engineeringWords} />
        <WordSection title="Medical Dictionary" words={medicalWords} />
        <WordSection title="Civil Engineering Dictionary" words={civilEngineeringWords} />
        <WordSection title="Mechanical Engineering Dictionary" words={mechanicalEngineeringWords} />
        <WordSection title="ComputerScience Engineering Dictionary" words={computerScienceWords} />
        <WordSection title="ArtsWords Dictionary" words={artsWords} />
        <WordSection title="ScienceWords Dictionary" words={scienceWords} />
        <WordSection title="architecture Words Dictionary" words={architectureWords} />
        <WordSection title="dramaWords Dictionary" words={dramaWords} />
        <WordSection title="physicsChemWords Dictionary" words={physicsChemWords} />
        <WordSection title="templeDecorWords Dictionary" words={templeDecorWords} />
        <WordSection title="tamilGrammarWords Dictionary" words={tamilGrammarWords} />
        <WordSection title="weavingCraftsWords Dictionary" words={weavingCraftsWords} />
        <WordSection title="agricultureWords  Dictionary" words={agricultureWords } />
        <WordSection title="ancientWeaponsWords  Dictionary" words={ancientWeaponsWords } />
        <WordSection title="tamilMusicInstrumentsWords Dictionary" words={tamilMusicInstrumentsWords} />
        <WordSection title="biologyWords Dictionary" words={biologyWords} />
        <WordSection title="templeArchitectureWords  Dictionary" words={templeArchitectureWords } />
        <WordSection title="sangamAgeWords Dictionary" words={sangamAgeWords} />
        <WordSection title="sculptureWords Dictionary" words={sculptureWords} />
        <WordSection title="literatureWords   Dictionary" words={literatureWords  } />
        <WordSection title="kalvettuWords Dictionary" words={kalvettuWords} />
        <WordSection title="dataAnalyticsWords Dictionary" words={dataAnalyticsWords} />
        <WordSection title="aiWords   Dictionary" words={aiWords  } />
        <WordSection title="mobileInternetWords Dictionary" words={mobileInternetWords} />
        <WordSection title="softwareProgrammingWords  Dictionary" words={softwareProgrammingWords } />
        <WordSection title="traditionalArtsWords  Dictionary" words={traditionalArtsWords  } />

      </div>
    </div>
  );
};

export default Directionary;
