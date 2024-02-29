"use strict";
let Guest_List = ['Imran Khan', 'Nawaz Sharafi', 'Asif Ali Zardari'];
let totalGuests = Guest_List.length;
for (let i = 0; i < Guest_List.length; i++) {
    console.log('Dear Mr. ' + Guest_List[i] + ',\n\nIt is our pleasure to invite you to our party.\n\nThank you!');
}
console.log(`Total number of guests invited: ${totalGuests}`);
