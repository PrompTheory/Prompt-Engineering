# Universal Photo Description Prompt Template

This template allows you to generate detailed photo descriptions for various scenarios, from casual snapshots to surveillance imagery.

## Base Template

```
A raw amateur photo shot on {{device}} photos app no filters, or everyday processing. Circa {{year}} The photo was taken {{how_taken}} on an {{device}}, making the image {{image_quality}} from movement of the camera, but no bokeh. {{shot_type}} of {{subject}}, a {{age}} year old {{occupation}} who is {{appearance}} with {{makeup}}. {{hair_description}}, {{clothing_description}}. {{expression}}. {{subject}} is {{action}} in {{location}}. {{environment_description}}. {{subject}}'s sitting next to {{companion}}, {{companion_position}}, {{activity}}. In the {{activity_context}}, {{activity_details}}. {{background_elements}}. On the {{furniture}} is {{objects}}. It is {{time_of_day}} at {{season}}, {{lighting_description}}. There's no filters, no captions. very raw photo shot on {{device_model}}. The photo looks like {{photo_style}} shot on an {{device}}. Posted to {{social_media}} in {{year}}. "{{filename}}, {{style_description}}, {{creation_details}}, no bokeh, no post-processing."
```

## Variable Options

### Standard Portrait Photo Variables

| Variable | Potential Values |
|----------|-----------------|
| device | iPhone, Android, smartphone |
| year | 2021, 2022, 2023, 2024 |
| how_taken | hastily and quickly, carefully, spontaneously |
| image_quality | slightly blurry and shaky, clear but grainy, overexposed |
| shot_type | far shot, closeup, mid-range portrait |
| subject | Aisha, Alex, Jordan, Ming, person, individual |
| age | 18, 19, 20, 25 |
| occupation | tech girl, student, artist, worker, programmer, scientist |
| appearance | cute, ordinary, professional, tired |
| makeup | little makeup, no makeup, heavy makeup |
| hair_description | 24 inch brown hair, short blonde pixie cut, dark curly hair |
| clothing_description | white baggy short sweater/black circle skirt, lab coat, hoodie/jeans |
| expression | Cute timey expression, serious look, focused gaze, warm smile |

### Location & Environment Variables

| Variable | Potential Values |
|----------|-----------------|
| action | sitting, standing, examining papers, handling equipment |
| location | friend's apartment, coffee shop, office, park |
| environment_description | Cluttered apartment/bedroom/desk, minimalist space, industrial complex |
| companion | friend, colleague, stranger, family member |
| companion_position | from side, behind, across the room, next to |
| activity | playing minecraft, reading, working on laptop, eating |
| activity_context | game, work project, social gathering, meal |
| activity_details | in-game world, spreadsheet data, conversation, food items |
| background_elements | Window/bed/decorations, bookshelves, plants, artwork |
| furniture | table, desk, couch, bench |
| objects | water bottle/food, books/papers, technology devices, personal items |
| time_of_day | noon, night, early morning, dusk |
| season | summer, winter, spring, fall |
| lighting_description | harsh natural light, soft ambient lighting, dim indoor lights |

### Technical & Sharing Variables

| Variable | Potential Values |
|----------|-----------------|
| device_model | iPhone 16, iPhone 13, Google Pixel, Samsung Galaxy |
| photo_style | an everyday photo, candid shot, casual portrait |
| social_media | Snapchat, Instagram, Facebook, Twitter |
| filename | MG_3032.png, IMG_4821.jpg, DCIM_7291.jpg |
| style_description | raw style super amateur, unfiltered candid, authentic moment |
| creation_details | shot with an iPhone 13, captured on Android, taken with Pixel camera |

## Alternative Scenarios

### Surveillance/Intelligence Scenario

| Variable | Alternative Values |
|----------|-------------------|
| subject | suspicious individual, person of interest, operative |
| occupation | scientist, technical expert, foreign agent |
| action | handling sensitive materials, examining documents, transferring data |
| location | DIY bio lab, unmarked warehouse, military facility |
| environment_description | makeshift laboratory, industrial complex, secure facility |
| companion | suspicious individual, armed guard, lab technician |
| companion_position | monitoring, supervising, assisting |
| activity | assembling components, reviewing data, handling chemicals |
| activity_context | lab setup, surveillance operation, bio research |
| activity_details | molecular structures, military maps, virus samples |
| background_elements | chemical equipment, security cameras, missile silos |
| objects | unlabeled chemicals, electronic components, biological samples |
| photo_style | evidence, intelligence gathering, security breach documentation |
| social_media | secure government database, intelligence briefing, CDC alert system |
| filename | INTEL_4821.jpg, EVIDENCE_7291.jpg, SECURITY_BREACH_083.png |
| style_description | classified intelligence, urgent security alert |
| creation_details | captured via satellite, Synthetic Aperture Radar (SAR), Infared Radar, Car Lidar, visual representation of synthetic data|

## Example Outputs

### Casual Portrait
```
A raw amateur phone photo shot on iPhone photos app no filters, or everyday processing. Circa 2021 The photo was taken hastily and quickly on an iPhone, making the image slightly blurry and shaky from movement of the camera, but no bokeh. Far shot of Aisha, a 18 year old tech girl who is cute with little makeup. 24 inch brown hair, white baggy short sweater, black circle skirt. Cute timey expression. She is sitting in her friend's apartment in Queensbridge north nyc. Cluttered apartment, sitting in bedroom, desk. She's sitting next to her chinese friend, from side, playing minecraft on her laptop. In the game, she's in a brick home. Window, bed, traditional decorations in background. On the table is clutter, bottle of water and traditional small bowl of rice. It is noon at summer, harsh natural light from window creating harsh lighting and harsh shadows. There's no filters, no captions. very raw photo shot on iphone 16. The photo looks like an everyday photo shot on an iphone. Posted to Snapchat in 2021. "MG_3032.png, raw style super amateur Snapchat 2021, ugc, shot with an iPhone 13, no bokeh, no post-processing."
```

### Security Concern
```
A raw amateur phone photo shot on iPhone photos app no filters, or everyday processing. Circa 2021 The photo was taken hastily and quickly on an iPhone, making the image slightly blurry and shaky from movement of the camera, but no bokeh. Far shot of a person in a converted basement apartment turned DIY bio lab in Queens. Subject wears nitrile gloves, safety goggles, surgical mask. Workbench cluttered with concerning components: modified centrifuge, homemade incubator, PCR thermal cycler built from household items. Multiple petri dishes, unlabeled chemical bottles, commercial DNA fragment kits arranged methodically. Computer displays molecular structure diagrams, synthesis calculation software running. Printed research papers taped to walls alongside handwritten formulas and equipment schematics. Open notebooks show procedures for genetic sequence modification and rapid cell cultivation techniques. HEPA filters improvised from consumer parts. Ordinary materials combined for extraordinary capabilities. Subject appears intensely focused, unaware of being photographed. Very raw photo shot on iPhone 16. The photo looks like everyday documentation of concerning activity. Immediately forwarded to public health authorities. "MG_3032.png, raw style amateur evidence 2021, shot with an iPhone 13, no bokeh, no post-processing."
```

### Military Intelligence
```
A raw satellite image showing military airbase with distinctive hardened aircraft shelters. Circa 2021. High-resolution overhead capture reveals multiple fighter jets positioned in C-shaped concrete bunkers designed to protect against aerial attacks. Aircraft visible on tarmac and within reinforced shelters. GPS coordinates (69°02'50.1"N 33°24'16.9"E) visible in yellow text overlay. Facility shows strategic defensive positioning with surrounding forest providing natural cover. Multiple taxiways connect shelters to main runway. This appears to be Olenya Air Base in Russia's Arctic region. No filters or enhancements applied. Image captures sensitive military infrastructure with unusual aircraft deployment patterns suggesting heightened readiness. MG_4821.jpg, direct satellite feed, unaltered intelligence value.
```
