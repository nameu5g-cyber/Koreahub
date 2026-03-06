const fs = require('fs');
let content = fs.readFileSync('lib/data/registry/index.ts', 'utf8');

const servicesIds = [
    'general_kompass_дунпо_инчхон_синчанг',
    'general_siberia_consult',
    'general_samsung_life_елена_иловская',
    'general_mega_center_korea',
    'general_woori_bank_global',
    'general_wowpass'
];

const foodIds = [
    'general_baemin_배달의민족',
    'general_coupang_eats',
    'general_shuttle_delivery',
    'general_vo_blin_во_блин',
    'general_pizza_taki_пицца_таки',
    'general_family_семья',
    'general_samarkand_кванджу',
    'general_troika_итхэвон',
    'general_melnitsa_мельница',
    'general_imperia_foods',
    'general_assorti_ассорти',
    'general_medovik_медовик',
    'general_maria_bakery_dream_bakery',
    'general_lepeshka_лепёшка',
    'general_masters_ансан'
];

servicesIds.forEach(id => {
    const rx = new RegExp(`(["']id["']?\\s*:\\s*["']${id}["'],\\s*["']?verticalCode["']?\\s*:\\s*["'])general(["'])`, 'g');
    content = content.replace(rx, '$1services$2');
});

foodIds.forEach(id => {
    const rx = new RegExp(`(["']id["']?\\s*:\\s*["']${id}["'],\\s*["']?verticalCode["']?\\s*:\\s*["'])general(["'])`, 'g');
    content = content.replace(rx, '$1food$2');
});

// also rename the IDs to start with food_ and services_
servicesIds.forEach(id => {
    const newId = id.replace('general_', 'services_');
    content = content.replace(new RegExp(`["']${id}["']`, 'g'), `"${newId}"`);
});
foodIds.forEach(id => {
    const newId = id.replace('general_', 'food_');
    content = content.replace(new RegExp(`["']${id}["']`, 'g'), `"${newId}"`);
});

fs.writeFileSync('lib/data/registry/index.ts', content);
console.log('Successfully updated index.ts');
