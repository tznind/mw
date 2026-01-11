window.CardInitializers = window.CardInitializers || {};

window.CardInitializers.history = function(container, suffix) {
    console.log('History card initialized', { container, suffix });

    // Always create scoped helpers (works for both regular and duplicate cards)
    const helpers = window.CardHelpers.createScopedHelpers(container, suffix);

    // History options by class
    const historyOptionsByClass = {
        'The Wronged': [
            'They helped you at a critical point in your quest for revenge. Tell them what you needed help with.',
            'They stood between you and what you needed to find out. Ask them why.',
            'They also lost a friend or relative to these monsters. Ask them who it was.',
            'Relations, close or distant. Tell them exactly what.',
            'You saved their life, back when they were a pathetic newbie hunter. Ask them what you saved them from.',
            'You respect their hard-earned knowledge, and often come to them for advice.',
            'They showed you the ropes when you were learning how to fight.',
            'They saw you absolutely lose it and go berserk. Tell them what the situation was, and ask them how much collateral damage you caused.'
        ],
        'The Chosen': [
            'You are close blood relations. Ask them exactly how close.',
            'They are destined to be your mentor. Tell them how this was revealed.',
            'Your best friend in the world, who you trust totally.',
            'A rival at first, but you came to a working arrangement.',
            'Romantic entanglement, or fated to be romantically entangled.',
            'Just friends, from school or work or something. Ask them what.',
            'They could have been the Chosen One instead of you, but they failed some trial. Tell them how they failed.',
            'You saved their life, back when they didn\'t know monsters were real. Tell them what you saved them from.'
        ],
        'The Crooked': [
            'This hunter knows about your criminal past. Tell them what crimes they saw you commit.',
            'This hunter was there when you decided to give up the life and hunt monsters instead. Work out together what happened.',
            'This hunter is your younger sibling or child (possibly adopted). You look out for them.',
            'This hunter is a cousin or more distant relative.',
            'This hunter saved your life when a monster had the drop on you. Now you owe them one.',
            'This hunter worked with you on a semi-legal or illegal job. Work out what it was.',
            'This hunter is your moral compass. When you talk over things with them, their advice keeps you on the straight and narrow.',
            'You\'re powerfully attracted to this hunter. Maybe someday you\'ll deserve them.'
        ],
        'The Divine': [
            'If you are protecting another hunter as your mission, tell them this: You have a crucial role in what is to come. I am here to guide and defend you.',
            'They should not be involved in this situation: the prophecies didn\'t mention them at all. This gets your attention but you don\'t know what it means yet.',
            'They are, at heart, a good and righteous person. You must help them stay that way.',
            'They are an abomination, and should be destroyed. Except you can\'t–work out with them why not.',
            'Their prayer (perhaps an informal or even unconscious prayer) summoned you.',
            'They fill you with feelings of sexual infatuation. You are confused by the associated mortal emotions.',
            'They saved your life, and you understand (intellectually at least) that you owe them for it.',
            'They\'re the person you go to for advice on mortal stuff (e.g sex, food, drugs, television, etc).'
        ],
        'The Expert': [
            'They are your student, apprentice, ward, or child. Between you, decide which.',
            'They came to you for advice, and your advice got them out of trouble. Ask them what the trouble was.',
            'They know about some of your dark secrets, but they\'ve agreed to keep quiet about them. Tell them what they know.',
            'A distant relation. Tell them exactly what.',
            'You were previously both members of an eldritch group, now disbanded. Ask them why they left, then tell them why you did.',
            'They once helped you get a singular item that is now part of your haven. Tell them what it was.',
            'You were taught by the same master. Ask them how it ended.',
            'You saved their life in a tight spot. Tell them what happened.'
        ],
        'The Flake': [
            'They\'re somehow tied into it all. You\'ve been keeping an eye on them.',
            'They\'re a close relative. Ask them to decide exactly what.',
            'Old friends, who originally met through a long chain of coincidences.',
            'You went through hell together: maybe a monster, maybe military service, maybe time in an institution. Whatever it was, it bound you together, and you have total trust in each other.',
            'Members of the same support group.',
            'Fellow freaks.',
            'The signs all pointed to working together. So you found them and now you work together.',
            'You know each other through cryptozoology and conspiracy theory websites.'
        ],
        'The Initiate': [
            'They are a lay member of your Sect.',
            'You fought together when the tide of monsters seemed unstoppable. Ask them how it went.',
            'Friends, but they first met you under your cover identity, and learned about the Sect later. Ask how they feel about that.',
            'They are your close relative, or partner/spouse. Decide between you exactly what the relationship is.',
            'Fellow ancient weapons/martial arts club members.',
            'They\'re described in the prophecies, but the role they will play isn\'t stated.',
            'An ex-member of the Sect, but still friends. Ask them why they left or got thrown out.',
            'You met researching mystical weirdness, and you\'ve been occult comrades ever since.'
        ],
        'The Monstrous': [
            'You lost control one time, and almost killed them. Ask them how they stopped you.',
            'They tried to slay you, but you proved you\'re on the side of good. Ask them what convinced them.',
            'You are romantically obsessed with them. Ask them if they know, and if they reciprocate.',
            'Close relations, or a distant descendant. Tell them which.',
            'You saved them from another of your kind, and prevented reprisals against that individual creature (maybe it\'s another good one, or maybe it has a hold over you).',
            'They are tied to your curse or origin. Tell them how.',
            'You fought together against the odds, and prevailed.',
            'They saved you from another hunter who was prepared to kill you. Ask them what happened.'
        ],
        'The Mundane': [
            'You are close relations. Tell them exactly how you\'re related.',
            'Initially rivals, you both now respect each others\' talents.',
            'Romantically involved, or you just have a crush on them. Ask them which they prefer.',
            'They\'re your hero, exactly the kind of monster hunter you aspire to be. Tell them why you worship them.',
            'Good friends. Tell them if it\'s from way back, or recently.',
            'You\'re a bit suspicious of them (maybe due to their unnatural powers or something like that).',
            'They introduced you to the existence of monsters. Tell them how you feel about that.',
            'You saved their life from a monster due to an unlikely chain of events. Tell them what.'
        ],
        'The Professional': [
            'Your relationship with them has romantic potential. So far it hasn\'t gone further.',
            'They\'re on the Agency\'s watch list, and you\'ve been keeping an eye on them.',
            'You are related. Tell them how close.',
            'You met on a mission and worked together unofficially. And successfully.',
            'They\'ve worked with the Agency before, and they\'re well regarded.',
            'You were friends back in training, before the Agency recruited you. This could be military, law enforcement, or some weirder school: decide the details between you.',
            'They pulled you (and maybe your team) out of a terrible FUBARed mission.',
            'You got sent to "deal with them" as a hazard to the Agency\'s policies one time. Tell them how you resolved this.'
        ],
        'The Spell-Slinger': [
            'They act as your conscience when the power goes to your head. Ask them about the last time this happened.',
            'Blood relation, though you were out of contact for years. Ask them how they reconnected with you.',
            'Mentor from another life. Ask them what they taught you.',
            'Your magic-fueled rescue of them introduced them to the supernatural. Tell them what creature was after them.',
            'An old rivalry has turned into a tight friendship. Tell them what you once fought over.',
            'You thought they were dead, and now they\'re back. What "killed" them?',
            'They\'re an on-again/off-again love interest. Ask them what keeps you apart. Tell them what keeps you together.',
            'A comrade-in-arms. You\'ve faced the biggest threats together.'
        ],
        'The Spooky': [
            'They taught you to control your powers, to the extent that you can control them at all.',
            'You are blood-kin. Decide together exactly what.',
            'You are married, or romantically involved. Decide between you the exact relationship.',
            'You\'re old friends, and trust each other completely.',
            'You used your powers on them one time. Decide if it was for selfish reasons or not, and tell them if they found out about it.',
            'You\'ve known each other some time, but since your powers manifested, you keep them at a distance emotionally.',
            'You hope they can help you control your powers.',
            'They saw you use your powers for selfish or vindictive reasons. Ask them who the victim was, and then tell them what you did.'
        ]
    };

    // Detect which class/role is active
    const urlParams = new URLSearchParams(window.location.search);
    const currentRole = urlParams.get('role');

    // Get history options for current class
    const historyOptions = historyOptionsByClass[currentRole];

    if (!historyOptions) {
        console.error(`No history options defined for role: ${currentRole}`);
        return;
    }

    // Get the add button
    const addButton = helpers.getElement('history_add_btn');

    if (addButton) {
        // Add custom click handler that shows wizard
        addButton.addEventListener('click', async () => {
            // Show wizard with history options (just the text strings)
            const optionsArray = Object.values(historyOptions);
            const wizardData = [
                {
                    type: 'pickOne',
                    title: 'Pick one history option:',
                    options: optionsArray
                }
            ];

            const result = await window.Wizard.show(wizardData);

            if (result && result.length > 0) {
                // Wizard returns the actual selected text
                const selectedText = result[0];

                // Add row with values directly
                helpers.addTableRow('history', {
                    name: '',
                    details: selectedText
                });
            }
        });
    }
};
