import { createSelector } from "selector";

const allContacts = (state) => state.user;

// console.log(allContacts);
const selectContact = createSelector(
    [allContacts],
    (users)=> users.user
)

const userNameCount = createSelector(  
    [selectContact],
    (users) => users.user.length
)

const mobileCount = createSelector(
    [selectContact],
    (mobile) => {
        let count = 0;
        mobile.user.forEach(element => {
            if(element.mobile) {
                count++;
            }
        });
        return count;
    }
)

export {selectContact, userNameCount ,mobileCount }
    
