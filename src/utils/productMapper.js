// Change APi items into "Phoreign" branded products
export function mapPhoreignProducts(products) {
  return products.map((p) => {

// Copy
    const item = { ...p };

      // APi Customization Override
    const revertIds = [9, 12, 15, 18, 20]; 

    if (revertIds.includes(p.id)) {
      // Keep the original API data exactly
      return item; 
    }

    // brand/title/price customizations for items 1-9
    switch (p.id) {
      case 1:
        item.brand = "HackiNaBox";
        item.title = "Mayweather 50-0";
        item.description = "All-in-one pentesting station crafted for the savvy operator. This sleek navy flap-top pack features sturdy clasps, adjustable straps, and a kill switch emblem patch, encased a lightweight, weather-resistant shell with integrated tools like: jammers, probes, pinapples and a lifetime LifeLine one-way secure signal subscription. Housed in bulletproof, stab-proof, and fire-resistant nano layers. Its ergonomic design ensures silent carry and swift access, making it the ultimate mobile command center ";
        item.price = 1999;
        break;

      case 2:
        item.brand = "BuLLy";
        item.title = "4N Fury Catcher";
        item.description = "Introducing the 4N Fury Catcher from Phoreign Tech (4n Tech), a sleek 3/4-lightweight baseball sleeve designed for the operator on the go, blending agility with tactical style. Featuring a white body with black 3/4-length raglan sleeves and a 3 button Henley collar, this shirt integrates advanced bulletproof, stab-proof, and fire-resistant technology into a lightweight, flexible nano fabric, offering top-tier defense for dynamic urban missions. Its optimized mobility ensures unrestricted movement, making it the ideal choice for those navigating high-risk environments";
        item.price = 1299;
        break;

      case 3:
        item.brand = "BuLLy";
        item.title = "Phantom Bomber";
        item.description = "A cutting-edge combat jacket for elite operators, featuring a tan tactical shell with a high collar, zippered pockets, fortified with bulletproof (NIJ Level IIIA), stab-proof (KR1-rated), and fire-resistant (up to 600°C) nanomaterials, plus EMF shielding, RFID/NFC blockers, and modular holsters for concealed gear. Its adaptive thermal-regulating lining adjusts to extreme conditions, complemented by Faraday-lined compartments and self-sealing fabric—designed for agility in close-quarters or rapid deployment.";
        item.price = 2999;
        break;

      case 4:
        item.brand = "BuLLy";
        item.title = "4N Stealth Tee";
        item.description = "High-tech combat base layer for elite operators, featuring a sleek navy V-neck long-sleeve design enhanced with bulletproof (NIJ Level IIIA), stab-proof (KR1-rated), and fire-resistant (up to 600°C) nanofiber weave that jams facial recognition and flock cameras for ultimate covert ops. Its moisture-wicking, breathable fabbric has self-repairing micro-tears and anti-microbial lining—engineered for agility and protection in high-risk missions.";
        item.price = 1899;
        break;

      case 5:
        item.brand = "DraKo";
        item.title = "Silver Draco";
        item.description = "A stylish silver dragon bracelet that doubles as high-tech self-defense survival gear. Engineered with multi-function capabilities including a concealed garrote wire for restraint, fire-starter, and a signal mirror in the dragon's mouth, and anall new quick-release mechanism for emergency deployment. Its durable, hypoallergenic alloy resists corrosion and impactsand is crafted for discreet carry in covert missions.";
        item.price = 99;
        break;

      case 6:
        item.brand = "DraKo";
        item.title = "Eternity Ring";
        item.description = " a practical high-tech accessory for discerning professionals and undercover agents, featuring a sleek silver band with pavé-set synthetic diamonds for subtle elegance and scratch resistance. Crafted from hypoallergenic titanium with a water-resistant seal (up to 50m), it includes an embedded NFC chip for secure digital key storage—tap to unlock encrypted doors, vehicles, or apps—plus a discreet GPS locator for asset recovery in loss scenarios. The low-profile design ensures everyday comfort without bulk, ideal for executive travel, field reconnaissance, or personal security where blending luxury with functionality.";
        item.price = 349;
        break;

      case 7:
        item.brand = "DraKo";
        item.title = "Immunity Ring";
        item.description = "A sophisticated high-tech jewelry duo for security-conscious elites. Boasting a stunning cushion-cut synthetic diamond centerpiece with a pavé-set halo, paired with a matching band, both crafted from durable titanium with a water-resistant seal (up to 50m). Embedded with an NFC chip for secure digital key access—unlocking encrypted devices or vehicles—plus a discreet GPS tracker for asset recovery, this set combines elegance with practicality. Its hypoallergenic design ensures all-day comfort, ideal for high-profile events, covert missions, or personal protection where luxury meets smart functionalit.";
        item.price = 1299;
        break;

      case 8:
        item.brand = "DraKo";
        item.title = "Rojo Mojo Pinky Rings";
        item.description = "Each ring embeds an advanced NFC chip for secure, contactless access to encrypted digital wallets or vehicle ignitions, a compact GPS beacon for discreet location sharing via the LifeLine secure signal, and a haptic feedback motor for silent vibration alerts from paired devices—plus integrated biometric fingerprint scanner for quick identity verification. Designed for low-profile elegance in high-stakes negotiations, surveillance, or personal defense, they blend subtle luxury with practical tech for those who command presence without compromise—Phoreign Tech's fusion of mojo and modern utility..";
        item.price = 199;
        break;
// Custom Defaults
      default:
        item.brand = "Phoreign";
        item.title = `Prototype #${p.id}`;

// Use original description if available else use Generic 
        item.description = item.description || "Exclusive gear from Phoreign Labs.";
// Custom Price 4x Original (High End)
        item.price = Math.round(p.price * 4);
        break;
    }

// Use Original APi Pics)
    return item;
  });
}
