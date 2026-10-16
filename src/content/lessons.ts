import type { Lesson } from "./types";

export const course = {
  title: "Camera",
  tagline:
    "Learn to control light, motion, and focus on a DSLR or mirrorless — then shoot with intention.",
  audience: "Beginners who own a DSLR or mirrorless and are tired of Auto mode guessing",
  promise:
    "Seven lessons. Each one teaches one idea, shows real shooting examples, and ends with a short assignment you can finish the same day.",
};

export const lessons: Lesson[] = [
  {
    slug: "leave-auto",
    title: "Leave Auto without getting lost",
    summary:
      "What Auto is doing for you, why it fails, and which two modes you’ll live in for the rest of this course.",
    durationMinutes: 25,
    order: 1,
    goal: "Shoot in Aperture Priority and Shutter Priority with confidence, and know when to use each.",
    sections: [
      {
        heading: "What Auto is actually deciding",
        body: [
          "When you set Auto, the camera chooses aperture, shutter speed, ISO, white balance, focus point, and often flash. That is convenient for a birthday candle moment. It is terrible for learning, because every photo is a black box: you cannot tell why it worked or why it failed.",
          "Most “my camera takes bad photos” complaints are really “Auto made a compromise I would not have chosen.” Auto might freeze a kid’s face but blow out a bright window behind them. Or keep a landscape sharp from front to back while lifting ISO until the sky looks dirty. The camera is not wrong — it is optimizing for a generic “acceptable” image, not for your intent.",
        ],
      },
      {
        heading: "The mode dial that matters",
        body: [
          "Ignore the scene modes (portrait / sport / night) for now. They are Auto with a costume. Focus on these:",
          "P (Program): camera picks aperture and shutter together; you can usually shift the pair. Useful as a bridge out of Auto, but you still do not control depth of field or motion directly.",
          "A or Av (Aperture Priority): you pick the aperture (f-number). The camera picks a shutter speed to match the light. This is your default for portraits, details, and most daylight shooting.",
          "S or Tv (Shutter Priority): you pick the shutter speed. The camera picks an aperture. Use this when motion is the story — sports, cars, water, panning.",
          "M (Manual): you pick both. Powerful later. Right now it slows learning because you are juggling two variables before you understand either. We will touch Manual after the triangle feels natural.",
        ],
      },
      {
        heading: "A 60-second setup before lesson 2",
        body: [
          "Set image quality to RAW + JPEG if you have the card space, or JPEG Fine if you want simplicity. RAW gives you recovery room later; JPEG is fine while you learn exposure.",
          "Turn the focus mode to AF-S / One-Shot for still subjects (we refine focus in lesson 6).",
          "Set ISO to Auto for the first two lessons only if your camera lets you cap it (e.g. max 1600 or 3200). If you cannot cap Auto ISO, set ISO manually to 200 outdoors in daylight and 800 indoors, and adjust as needed.",
          "Enable the electronic level or grid in the viewfinder if your camera has it. Crooked horizons are a silent photo-killer.",
        ],
      },
    ],
    tips: [
      "If a photo looks wrong in Auto, do not keep tapping the shutter hoping for a better guess. Change mode and decide one thing: blur the background (A/Av) or control motion (S/Tv).",
      "Half-press the shutter to meter and focus before the final press. Rushing the full press is how you get soft frames of moving people.",
      "Write your settings down for the first week. Pattern recognition beats memory.",
    ],
    examples: [
      {
        title: "Window portrait on Auto",
        setup:
          "Friend sits by a bright window. Auto often exposes for the face and blows the window to pure white, or exposes for the window and turns the face into a silhouette.",
        whatToNotice:
          "Neither result is “broken hardware.” Auto does not know whether the story is the face or the light. In A/Av you will choose a wide aperture for the face and then use exposure compensation (lesson 5) to protect highlights if needed.",
      },
      {
        title: "Kid running in the park",
        setup:
          "Auto may pick 1/125s because the light is fine for a still scene. The kid blurs. You curse the lens.",
        whatToNotice:
          "Motion needed a faster shutter. S/Tv at 1/500s or higher would have told the camera: freeze first, aperture second.",
      },
    ],
    takeaways: [
      "Auto hides decisions. Semi-auto modes (A/Av, S/Tv) let you own one decision at a time.",
      "A/Av = control background blur and sharpness through the scene. S/Tv = control freeze vs blur of motion.",
      "Manual can wait. Learn one control deeply before you turn both dials.",
    ],
    practice: {
      title: "Same scene, three modes",
      goal: "Feel how Auto, A/Av, and S/Tv change the same photograph.",
      steps: [
        "Pick one simple subject in steady light: a mug on a table, a plant, a parked bike.",
        "Shoot once in Auto. Note the aperture, shutter, and ISO the camera chose (check the playback info screen).",
        "Switch to A/Av. Set the widest aperture your lens allows (smallest f-number, e.g. f/1.8 or f/3.5). Shoot. Then shoot again at f/8.",
        "Switch to S/Tv. Shoot at 1/60s and at 1/500s of the same subject.",
        "Compare on the camera screen: which frames feel sharper? Which backgrounds melt? Which look darker/brighter?",
      ],
      successLooksLike:
        "You can point to each frame and say what you chose versus what the camera chose — without guessing.",
    },
  },
  {
    slug: "see-the-light",
    title: "See the light before you touch a dial",
    summary:
      "Direction, quality, and contrast decide the mood of a photo more than any menu setting.",
    durationMinutes: 30,
    order: 2,
    goal: "Describe light in plain language and place your subject where the light is already doing useful work.",
    sections: [
      {
        heading: "Settings respond to light — they do not create a good scene",
        body: [
          "Beginners often hunt for a “portrait setting” or a magic ISO. Pros walk first. They look at where the light is coming from, how hard it is, and what it is doing to faces and textures. Then they pick settings to protect that light.",
          "If the light is ugly — overhead noon sun carving raccoon eyes on a face — no aperture will make it flattering. Move the subject, wait, or turn them. Your job in this lesson is to notice light as a material, like clay.",
        ],
      },
      {
        heading: "Direction: where the light comes from",
        body: [
          "Front light (light behind you, hitting the subject’s face) is safe and flat. Colors pop; texture dies. Good for product shots and quick snapshots; boring for portraits if overused.",
          "Side light (light from the left or right) reveals shape. Cheeks, fabric folds, tree bark — side light makes dimension. This is why window light from the side is a classic indoor portrait setup.",
          "Back light (light behind the subject, toward the camera) creates halos, rim light, and silhouettes. Metering gets confused here — faces go dark unless you expose for them on purpose. When it works, photos feel cinematic.",
          "Top light (noon sun, overhead fixtures) is usually the least flattering on faces: eye sockets go dark, noses cast long shadows. Raise a reflector (even a white wall or open shade) or move.",
        ],
      },
      {
        heading: "Quality: hard vs soft",
        body: [
          "Hard light = small, sharp source relative to the subject (bare sun, bare bulb). Shadows have crisp edges. Contrast is high. Drama is easy; skin flaws are honest.",
          "Soft light = large source relative to the subject (overcast sky, shade, light through sheer curtains, softbox). Shadows feather out. Skin looks kinder. Landscapes can feel muted and beautiful.",
          "Size is relative. The sun is huge but far away, so outdoors it acts like a small hard source. A window two meters from a face acts like a large soft source. Move a subject closer to a window and the light gets softer and larger on their face.",
        ],
      },
      {
        heading: "Contrast: can the camera hold it?",
        body: [
          "Your eyes adapt as you glance around a room. The sensor does not. A dark doorway with a bright street outside often exceeds what JPEG (and even RAW) can hold in one frame. That is dynamic range.",
          "When contrast is extreme, choose a priority: protect highlights (sky, window, lamp) or protect shadows (face, interior). Later you will use exposure compensation and spot metering. For now, just learn to see the conflict before you shoot.",
        ],
      },
    ],
    tips: [
      "Open shade (shadow of a building, but open to bright sky) is a free softbox for portraits. Faces even out; catchlights stay in the eyes.",
      "If you only remember one move indoors: turn the subject 30–45° toward a window instead of facing it square-on or standing with their back to it.",
      "Golden hour (roughly the hour after sunrise / before sunset) is side-to-back warm light. It forgives a lot of beginner technique. Use it while learning.",
    ],
    examples: [
      {
        title: "Kitchen at noon vs by the window",
        setup:
          "Same person, same kitchen. First frame under ceiling lights only. Second frame one meter from a north-facing window, lights off.",
        whatToNotice:
          "Ceiling light is small and overhead → hard, unflattering shadows. Window light is large and side-on → soft gradient across the face. Same camera, different photograph.",
      },
      {
        title: "Street at midday",
        setup:
          "Shoot a storefront in direct sun, then step into the shade of an awning and shoot looking back toward the sunlit street.",
        whatToNotice:
          "Direct sun = hard shadows under ledges and noses. From shade looking out, subjects can silhouette against bright ground — backlit contrast. You will start pre-visualizing which side of the street to stand on.",
      },
    ],
    takeaways: [
      "Move the subject or yourself before you fight the exposure dials.",
      "Name the light: direction (front/side/back/top) and quality (hard/soft).",
      "High contrast is a choice problem, not a failure — decide what must stay detailed.",
    ],
    practice: {
      title: "Light journal — six frames",
      goal: "Train your eye to describe light without looking at EXIF.",
      steps: [
        "Shoot six photos of any one object (a chair, a shoe, a plant) in six different lights: direct sun, open shade, cloudy, window side light, backlight, and indoor lamp light.",
        "For each frame, write one line: direction + quality + one word for mood (harsh, gentle, dramatic, flat, warm, cold).",
        "Pick the two you like most and the one you hate. Note whether you could have improved the hated one by moving three steps.",
      ],
      successLooksLike:
        "You can look at a room and say where you would put a person before you raise the camera.",
    },
  },
  {
    slug: "aperture-and-depth",
    title: "Aperture: how much is sharp",
    summary:
      "f-numbers, depth of field, and when a blurry background helps — or hurts — the photo.",
    durationMinutes: 35,
    order: 3,
    goal: "Choose an aperture on purpose for portraits, groups, and scenes where you need front-to-back sharpness.",
    sections: [
      {
        heading: "What the aperture is",
        body: [
          "Aperture is the opening in the lens. A wider opening lets in more light and usually produces a shallower depth of field (less of the scene in focus). A smaller opening lets in less light and usually increases depth of field (more in focus).",
          "The scale looks backwards at first: f/1.8 is a wide opening; f/16 is a small opening. Lower f-number = more light + more background blur (all else equal). Higher f-number = less light + more of the scene sharp.",
        ],
      },
      {
        heading: "Depth of field is not only the f-number",
        body: [
          "Three things shrink depth of field (make backgrounds creamier): wider aperture (low f-number), longer focal length (70mm blurs more than 24mm at the same f-stop and framing), and closer distance to the subject.",
          "That is why a kit lens at 55mm f/5.6, standing close to a person, can blur a background decently — distance and focal length help. And why f/1.8 on a wide lens at a group photo from far away may still keep too much of the room sharp.",
          "For landscapes and architecture where you want near-to-far sharpness, stop down (f/8 to f/11 is a common starting zone on APS-C and full-frame). Going past f/16 often costs sharpness to diffraction — the image gets optically softer even though more is “in focus.”",
        ],
      },
      {
        heading: "How to shoot this in A/Av",
        body: [
          "Set A/Av. Pick the f-number. Watch the shutter speed the camera chooses. If it drops below about 1/focal-length (e.g. below 1/50s on a 50mm lens) and you are handholding, raise ISO or open the aperture, or stabilize.",
          "Focus on the eye closest to the camera for portraits. A beautiful f/1.8 frame focused on an ear is still a miss.",
        ],
      },
    ],
    tips: [
      "Portraits: start around f/1.8–f/2.8 on a prime, or the widest your zoom allows. If the second eye or ear falls apart too much, stop down one stop (e.g. f/2.8 → f/4).",
      "Two or three people in a line toward the camera need more depth of field than a single headshot — try f/4–f/5.6 and focus on the nearest face, or align people on the same plane.",
      "Blurry background does not equal good photo. If the subject’s expression is weak, cream bokeh will not save it.",
    ],
    examples: [
      {
        title: "Coffee cup on a busy table",
        setup:
          "Shoot the cup at f/1.8 (or widest) from ~40cm away at 50mm-equivalent, then again at f/8 from the same spot.",
        whatToNotice:
          "Wide open: cup sharp, crumbs and keys melt. Stopped down: the whole table competes for attention. Same subject; aperture decided the story.",
      },
      {
        title: "Friend against trees at 35mm vs 85mm",
        setup:
          "Frame a head-and-shoulders portrait at 35mm f/2.8, then step back and frame the same with 85mm f/2.8.",
        whatToNotice:
          "The longer lens compresses and blurs the trees more at the same aperture. Focal length is part of the depth-of-field toolkit, not only “zoom.”",
      },
    ],
    takeaways: [
      "Low f-number → more light, shallower focus plane. High f-number → less light, deeper sharpness.",
      "Distance and focal length change blur as much as the f-number.",
      "In A/Av, you own depth of field; watch the shutter speed so you do not invent handshake blur.",
    ],
    practice: {
      title: "Aperture ladder",
      goal: "See depth of field change in a controlled sequence.",
      steps: [
        "Put an object on a table with a busy background 1–2 meters behind it.",
        "In A/Av, focus on the object. Shoot at your widest aperture, then f/4, f/5.6, f/8, and f/11 (skip any your lens cannot do).",
        "Keep the same framing and focus point. Let ISO rise if needed so shutter stays handholdable.",
        "Review at 100% on a computer if you can: note which frame first makes the background readable as “stuff” instead of wash.",
      ],
      successLooksLike:
        "You can predict roughly what f/2.8 vs f/8 will do before you take the shot.",
    },
  },
  {
    slug: "shutter-and-motion",
    title: "Shutter speed: freeze or blur",
    summary:
      "How shutter speed controls motion, handshake, and creative blur — and when to switch to S/Tv.",
    durationMinutes: 35,
    order: 4,
    goal: "Pick shutter speeds that match the motion in front of you, including intentional blur.",
    sections: [
      {
        heading: "Time is a creative control",
        body: [
          "Shutter speed is how long the sensor is exposed to light. 1/1000s is a short slice of time; 1/4s is a long one. Short shutters freeze action. Long shutters streak lights, soften water, and turn walking people into ghosts.",
          "There is no universally “correct” shutter speed. A dancer might look powerful frozen at 1/800s or expressive with a slight blur at 1/60s. Decide what motion should feel like, then set the number.",
        ],
      },
      {
        heading: "Handholding limits",
        body: [
          "If the camera moves during a long exposure, everything blurs — that is camera shake, not subject motion. A rough starting rule without stabilization: stay at 1/focal-length or faster (1/50s for 50mm, 1/100s for 100mm). Crop-sensor cameras effectively magnify, so err faster.",
          "In-body or lens stabilization helps you handhold slower for still subjects. It does not freeze a running dog. Stabilization ≠ fast shutter for action.",
          "When in doubt for people walking toward you in daylight, 1/250s is a safe all-purpose floor. Sports and kids mid-sprint often want 1/500s–1/2000s.",
        ],
      },
      {
        heading: "Working in S/Tv",
        body: [
          "Set S/Tv, choose the shutter, and let the camera pick aperture. Watch the aperture readout. If it blinks at the widest or smallest extreme, the camera cannot expose correctly — raise/lower ISO or accept a different shutter.",
          "Panning: use a slower shutter (often 1/15s–1/60s), track a moving subject with your body, and release while moving. The subject stays relatively sharp; the background streaks. Practice rate is low at first — that is normal.",
        ],
      },
    ],
    tips: [
      "Review motion blur at 100% zoom on the LCD. A shot can look sharp as a thumbnail and be soft on the face.",
      "Waterfalls and waves: try 1/4s–1s on a tripod or braced surface for silk water; try 1/500s+ for droplet detail.",
      "If A/Av keeps giving you slow shutters indoors, you do not have an aperture problem — you have a light problem. Open blinds, move to a window, raise ISO, or accept blur.",
    ],
    examples: [
      {
        title: "Cyclist on a path",
        setup:
          "Same rider, same spot. Frame 1 at 1/1000s. Frame 2 at 1/30s while panning with the bike.",
        whatToNotice:
          "1/1000s freezes spokes and face; background is static. 1/30s pan keeps the rider somewhat sharp with streaked trees — energy instead of specimen.",
      },
      {
        title: "Evening street lights",
        setup:
          "Brace on a railing. Shoot traffic at 1/4s.",
        whatToNotice:
          "Headlights become ribbons. People may ghost. The photo is about time passing, not a sharp pedestrian.",
      },
    ],
    takeaways: [
      "Fast shutter freezes; slow shutter records motion as blur or streaks.",
      "Handshake blur and subject blur look different — learn to diagnose which one you have.",
      "Use S/Tv when motion is the priority; still watch whether the camera can deliver a usable aperture.",
    ],
    practice: {
      title: "Freeze / blur / pan",
      goal: "Produce three intentional motion results of the same kind of subject.",
      steps: [
        "Find moving subjects: traffic, joggers, pets, ceiling fans, water from a tap.",
        "In S/Tv, shoot a freeze frame at 1/500s or faster.",
        "Shoot a blur frame at 1/15s–1/30s while holding still (tripod or brace helps).",
        "Shoot ten pan attempts between 1/20s and 1/60s. Keep one success.",
        "Label them freeze / blur / pan so you build a mental library.",
      ],
      successLooksLike:
        "At least one frame of each type where the motion effect looks deliberate, not accidental.",
    },
  },
  {
    slug: "iso-and-exposure",
    title: "ISO, metering, and exposure decisions",
    summary:
      "How to balance the triangle, read the meter, and use exposure compensation when the camera guesses wrong.",
    durationMinutes: 40,
    order: 5,
    goal: "Expose scenes on purpose — including snow, backlit subjects, and dark rooms — without living in panic-Auto-ISO.",
    sections: [
      {
        heading: "ISO is the compromise dial",
        body: [
          "ISO brightens the signal from the sensor. Base ISO (often 100 or 200) gives the cleanest file. Higher ISO lets you use a faster shutter or smaller aperture in weak light, but adds noise and can crush fine color.",
          "Modern cameras are good at ISO 1600–3200; some are usable far beyond. Noise is less ugly than a blurry face. Prefer a sharp noisy photo over a clean soft one when people are moving.",
          "Think of ISO as the last choice after you have set the aperture or shutter you creatively want. In A/Av: set aperture for depth of field, raise ISO until shutter is safe. In S/Tv: set shutter for motion, raise ISO until aperture is acceptable.",
        ],
      },
      {
        heading: "What the meter is trying to do",
        body: [
          "Your camera’s meter aims for a middle gray world. Point it at a white snowfield and it often darkens the snow to gray. Point it at a black jacket and it often brightens the jacket to gray. That is why “correct meter” is not always “correct photo.”",
          "Evaluative / matrix metering looks at the whole frame — good default. Center-weighted cares more about the middle. Spot metering reads a tiny area — powerful for faces against bright windows once you know what you are asking for.",
        ],
      },
      {
        heading: "Exposure compensation is your steering wheel",
        body: [
          "In A/Av and S/Tv, exposure compensation (often a ± button) tells the camera: make the whole result brighter or darker than your meter’s guess. Snow scene looking gray? Dial +1 to +2. Concert stage with a bright spotlight and a dark room? You may need −1 so the spot does not blow out.",
          "Watch the histogram if you have it. A spike slammed against the right edge means clipped highlights — gone detail in bright areas. A spike against the left means crushed shadows. For JPEG-heavy shooters, protect highlights first; faces in open shade can be lifted a little in editing or with a bit of +compensation.",
        ],
      },
    ],
    tips: [
      "Bright subject, dark background (spotlit singer): meter tends to overexpose the subject — try −0.7 to −1.3 compensation or spot-meter the face.",
      "Dark subject, bright background (person against sky): meter underexposes the person — try +0.7 to +1.7, or fill with a reflector / open shade reposition.",
      "If Auto ISO keeps jumping wildly between frames, set a manual ISO for a sequence (an event, a walk) so brightness stays consistent.",
    ],
    examples: [
      {
        title: "Snow day",
        setup:
          "Landscape of snow under sun. Default meter reading.",
        whatToNotice:
          "Snow renders muddy gray. Add +1 to +2 EV compensation; snow turns white again and the file matches what you saw.",
      },
      {
        title: "Friend under a tree, bright field behind",
        setup:
          "Face in shade, sunlit field in the background. Matrix metering.",
        whatToNotice:
          "Camera may expose for the field and underexpose the face. +compensation or step the friend into open shade with a less nuclear background. Technique and positioning both count.",
      },
    ],
    takeaways: [
      "ISO buys you shutter speed or aperture when light runs out — use it deliberately.",
      "The meter targets middle gray; snow and coal need your override.",
      "Exposure compensation is normal, not a hack — use it every time the scene is not average.",
    ],
    practice: {
      title: "Break the meter on purpose",
      goal: "See when the camera is wrong and fix it with compensation.",
      steps: [
        "Shoot a white wall or sheet of paper filling the frame at 0 compensation. Note how gray it looks.",
        "Reshoot at +1 and +2. Pick the frame that looks actually white.",
        "Shoot a backlit person against a bright window at 0, then at +1, then at −1. Compare face detail vs window detail.",
        "Write which compensation you would start with next time for each scenario.",
      ],
      successLooksLike:
        "You stop trusting the blinkies of “0 EV” as moral truth and start asking what tone you want.",
    },
  },
  {
    slug: "focus-with-intent",
    title: "Focus where the story is",
    summary:
      "AF modes, focus points, back-button basics, and why soft photos are usually focus or shutter — not “a bad lens.”",
    durationMinutes: 30,
    order: 6,
    goal: "Put sharp focus on the right plane every time for still and moving subjects.",
    sections: [
      {
        heading: "Soft photos are usually technique",
        body: [
          "Before you blame glass: was the shutter too slow? Was focus on the eye or on the nose/ear/background? Was the AF point sitting on the brightest contrast while your subject was elsewhere? Kit lenses can make sharp images. Missed focus and handshake create most beginner disappointment.",
        ],
      },
      {
        heading: "AF modes",
        body: [
          "AF-S / One-Shot: focuses once when you half-press (or press AF-ON). Best for still or slow subjects. If the subject moves after focus lock, they leave the sharp plane.",
          "AF-C / AI Servo / Continuous: keeps focusing while you track. Best for kids, pets, sports. Pair it with continuous burst if your camera supports it.",
          "AF-A / Auto-switching: camera decides. Fine until it guesses wrong — then you will not know why. Prefer choosing S or C yourself while learning.",
        ],
      },
      {
        heading: "Where to put the focus point",
        body: [
          "Single-point AF (or a small flexible spot) is your friend. Put the point on the nearest eye for portraits. Recompose gently if needed — with wide apertures, large recomposes after focus can shift the plane enough to soften the eye. Better: move the focus point to the eye and keep framing.",
          "Zone / wide area AF helps for erratic subjects but can grab the nearest contrast (a foreground branch, a bright shirt). When the camera “refuses” to focus on a face, check whether a higher-contrast object is closer to the lens.",
          "Eyes must be sharp in portraits even if ears are soft. In landscapes, focus about a third of the way into the scene when stopped down, or use hyperfocal methods later — for now, focus on the main subject that must be readable.",
        ],
      },
    ],
    tips: [
      "If your camera supports back-button focus, try it for a week: focus with your thumb, shutter only releases. Separating the two actions reduces accidental refocus.",
      "Low light and low contrast (plain walls, dusk faces) make AF hunt. Add a little light, focus on an eyelid/eyelash edge, or use the center point then recompose carefully.",
      "Manual focus with focus peaking or magnified live view is excellent for static product shots and night landscapes.",
    ],
    examples: [
      {
        title: "Wide-open portrait, focus on the nose",
        setup:
          "50mm f/1.8, eye-level portrait, AF point accidentally on the tip of the nose.",
        whatToNotice:
          "Nose is razor sharp; eyes are soft. At f/1.8 that error is obvious. Move the point to the eye — same light, “better lens.”",
      },
      {
        title: "Dog running toward you",
        setup:
          "AF-S with a half-press, then wait. Dog closes two meters before you shoot.",
        whatToNotice:
          "Focus was locked where the dog was, not where it is. AF-C while tracking the chest or eyes keeps the plane updating.",
      },
    ],
    takeaways: [
      "Diagnose soft images: shutter vs focus plane vs subject movement.",
      "AF-S for stills, AF-C for motion; pick deliberately.",
      "Put a single AF point on the story — usually the nearest eye.",
    ],
    practice: {
      title: "Eye / ear / background test",
      goal: "Prove to yourself how little focus error you can afford at wide apertures.",
      steps: [
        "With a willing face (or a stuffed animal), shoot at your widest aperture.",
        "Frame identical shots focused on the eye, then the ear, then a background object behind the head.",
        "Compare at 100%. Note how fast “almost focused” becomes “unusable.”",
        "Then switch AF-C and track a walking person for 20 frames. Keep the three sharpest.",
      ],
      successLooksLike:
        "You instinctively put the AF point on the eye without thinking about the menu.",
    },
  },
  {
    slug: "compose-on-purpose",
    title: "Compose on purpose",
    summary:
      "Framing tools that create clear photos: subject placement, edges, layers, and simplifying the frame.",
    durationMinutes: 35,
    order: 7,
    goal: "Build photographs that read in one second — clear subject, clean edges, intentional balance.",
    sections: [
      {
        heading: "Composition is editing before you click",
        body: [
          "A camera records everything in the rectangle. Composition is deciding what belongs and what must leave. Most weak photos fail because they contain three competing subjects, a horizon cutting a neck, or empty space that does not support the subject.",
          "Rules (thirds, leading lines, symmetry) are training wheels. The real test: can a stranger understand what the photo is about in one glance?",
        ],
      },
      {
        heading: "Tools that actually help",
        body: [
          "Subject size: fill more of the frame than you think. Beginners stand too far away. Take one step closer (or zoom) after you think you are done.",
          "Placement: center feels stable and formal; thirds and off-center placements feel active. Put the subject’s gaze or motion into the open space (looking/walking into the frame), not into the short edge unless you want tension.",
          "Lines and layers: roads, rails, shorelines, and shadows can point at the subject. Foreground / middle / background layers create depth — even on a phone-sized screen.",
          "Edges: scan the four borders before you shoot. Tree branches growing out of heads, bright trash in a corner, and cut-off feet are avoidable. Cropping later can fix some of this; clean shooting is faster.",
          "Simplify: remove clutter by changing angle, kneeling, or waiting for a person to leave the background. Backgrounds make or break portraits more often than lenses do.",
        ],
      },
      {
        heading: "Putting the whole course together",
        body: [
          "A finished beginner workflow looks like this: see the light → place the subject → choose A/Av or S/Tv based on whether depth of field or motion matters more → set ISO so the exposure holds → put focus on the story → check the edges → shoot more than one frame.",
          "You will still take bad photos. The difference is you can name why — and fix the next one.",
        ],
      },
    ],
    tips: [
      "If a photo feels “busy,” ask: what is the one noun this photo is about? Crop or reshoot until that noun dominates.",
      "Vertical frames are not only for people — use them when vertical lines dominate (doors, trees, full-length fashion).",
      "Shoot a “safety” wider frame, then a tighter intentional frame. Learning needs options.",
    ],
    examples: [
      {
        title: "Street musician",
        setup:
          "First instinct: stand far, include the whole plaza. Second attempt: kneel, fill with guitar and face, wait until bright pedestrians leave the background, place the face on a third.",
        whatToNotice:
          "Same musician, different photo. Distance and patience were the composition tools — not a new camera.",
      },
      {
        title: "Mountain lake",
        setup:
          "Centered mountain with dead space sky and a trash bin in the lower right versus low angle with shoreline leading line and bin excluded.",
        whatToNotice:
          "The second frame uses layers and edge control. Viewers forgive average light more easily when structure is clear.",
      },
    ],
    takeaways: [
      "One clear subject beats a clever setting.",
      "Check light, settings, focus — then check the edges.",
      "Composition is a habit of subtraction and placement, practiced every frame.",
    ],
    practice: {
      title: "One subject, five compositions",
      goal: "Separate “I was there” snapshots from intentional frames.",
      steps: [
        "Pick one subject you can walk around (statue, espresso machine, bicycle, doorway).",
        "Make five different photos: centered formal; rule-of-thirds; extreme close detail; wide environmental; low or high angle.",
        "For each, write one sentence: what you included, what you excluded, and where the eye goes first.",
        "Delete the weakest two. Keep a contact sheet of the three survivors.",
      ],
      successLooksLike:
        "You can explain each keep without saying “I just liked it” — you can point to subject, light, and edges.",
    },
  },
];

export function getLessons(): Lesson[] {
  return [...lessons].sort((a, b) => a.order - b.order);
}

export function getLesson(slug: string): Lesson | undefined {
  return lessons.find((lesson) => lesson.slug === slug);
}

export function getAdjacentLessons(slug: string): {
  previous?: Lesson;
  next?: Lesson;
} {
  const ordered = getLessons();
  const index = ordered.findIndex((lesson) => lesson.slug === slug);
  if (index === -1) return {};

  return {
    previous: ordered[index - 1],
    next: ordered[index + 1],
  };
}
