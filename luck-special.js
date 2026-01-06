/**
 * Luck Special - Handles role-specific luck descriptions
 */

(function() {
    'use strict';

    /**
     * Update luck description based on selected role
     */
    function updateLuckDescription() {
        const roleSelect = document.getElementById('role');
        if (!roleSelect || !roleSelect.value) {
            return;
        }

        const roleName = roleSelect.value;
        const roleData = window.availableMap ? window.availableMap[roleName] : null;

        if (!roleData) {
            return;
        }

        const luckDescriptionDiv = document.getElementById('luck-description');
        if (!luckDescriptionDiv) {
            return;
        }

        // Get the base description
        const baseDescription = 'Mark luck to change a roll to 12 or avoid all harm from an injury.';

        // Check if role has a luck special
        if (roleData.luckSpecial) {
            luckDescriptionDiv.innerHTML = baseDescription + ' ' + roleData.luckSpecial;
        } else {
            luckDescriptionDiv.innerHTML = baseDescription;
        }
    }

    /**
     * Initialize luck special handling
     */
    function initialize() {
        const roleSelect = document.getElementById('role');
        if (!roleSelect) {
            console.warn('Luck Special: Role select not found');
            return;
        }

        // Update on role change
        roleSelect.addEventListener('change', updateLuckDescription);

        // Update immediately in case a role is already selected
        updateLuckDescription();
    }

    // Wait for app initialization to complete
    if (window.AppEvents) {
        window.AppEvents.on('initializationComplete', initialize);
    } else {
        console.warn('Luck Special: AppEvents not available');
    }

})();
