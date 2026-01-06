// Stat Lineup Picker - Uses wizard to show stat distribution options

(function() {
    'use strict';

    /**
     * Parse a stat distribution string and apply to stat inputs
     * @param {string} distString - e.g., "Charm+2, Cool-1, Sharp+1, Tough+2, Weird-1"
     */
    function applyStatDistribution(distString) {
        const parts = distString.split(',').map(s => s.trim());
        const statIds = ['charm', 'cool', 'sharp', 'tough', 'weird'];

        parts.forEach(part => {
            // Match pattern like "Charm+1", "Cool-1", "Charm +1", "Tough 0", etc.
            // Allows optional whitespace and optional +/- sign
            const match = part.match(/^(\w+)\s*([\+\-]?\d+)$/);
            if (match) {
                const statName = match[1].toLowerCase();
                let value = match[2];

                // If no sign present and not zero, add + sign
                if (!value.startsWith('+') && !value.startsWith('-') && value !== '0') {
                    value = '+' + value;
                }

                // For zero values, represent as +0
                if (value === '0') {
                    value = '+0';
                }

                const input = document.getElementById(statName);
                if (input) {
                    input.value = value;
                    // Trigger change event for persistence
                    input.dispatchEvent(new Event('change', { bubbles: true }));
                }
            }
        });
    }

    /**
     * Show stat distribution picker using wizard
     */
    async function showStatDistributionPicker() {
        const selectedRoles = window.Utils ? window.Utils.getCurrentRoles() : [];

        if (selectedRoles.length === 0) {
            alert('Please select a role first.');
            return;
        }

        // Get stat distributions for the first selected role
        const roleName = selectedRoles[0];
        const roleData = window.availableMap ? window.availableMap[roleName] : null;

        if (!roleData || !roleData.statDistributions) {
            alert('No stat distributions available for this role.');
            return;
        }

        // Use wizard to show stat distributions
        const wizardData = [
            {
                type: 'pickOne',
                title: 'Choose your stat distribution:',
                options: roleData.statDistributions
            }
        ];

        const result = await window.Wizard.show(wizardData, {
            title: 'Stat Distribution'
        });

        // If user selected an option, apply it
        if (result && result.length > 0) {
            applyStatDistribution(result[0]);
        }
    }

    /**
     * Initialize stat lineup picker
     */
    function initializeStatLineupPicker() {
        const statsHelpButton = document.getElementById('stats-help-button');
        if (!statsHelpButton) return;

        statsHelpButton.addEventListener('click', showStatDistributionPicker);
    }

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initializeStatLineupPicker);
    } else {
        initializeStatLineupPicker();
    }

})();
