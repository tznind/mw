window.CardInitializers = window.CardInitializers || {};

window.CardInitializers.history = function(container, suffix) {
    console.log('History card initialized', { container, suffix });

    // Create scoped helpers for duplicate card support
    const helpers = suffix ?
        window.CardHelpers.createScopedHelpers(container, suffix) :
        window.CardHelpers;

    // History options for The Wronged
    const historyOptions = {
        'helped_critical': 'They helped you at a critical point in your quest for revenge. Tell them what you needed help with.',
        'stood_between': 'They stood between you and what you needed to find out. Ask them why.',
        'lost_friend': 'They also lost a friend or relative to these monsters. Ask them who it was.',
        'relations': 'Relations, close or distant. Tell them exactly what.',
        'saved_life': 'You saved their life, back when they were a pathetic newbie hunter. Ask them what you saved them from.',
        'respect_knowledge': 'You respect their hard-earned knowledge, and often come to them for advice.',
        'showed_ropes': 'They showed you the ropes when you were learning how to fight.',
        'saw_berserk': 'They saw you absolutely lose it and go berserk. Tell them what the situation was, and ask them how much collateral damage you caused.'
    };

    // Get the add button
    const addButton = helpers.getElement('history_add_btn');

    if (addButton) {
        // Remove the default table add behavior
        addButton.removeAttribute('data-table-add');

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
                // Wizard returns the index, not the text
                const selectedIndex = result[0];
                const selectedText = optionsArray[selectedIndex];

                // Add row with values directly
                helpers.addTableRow('history', {
                    name: '',
                    details: selectedText
                });
            }
        });
    }
};
