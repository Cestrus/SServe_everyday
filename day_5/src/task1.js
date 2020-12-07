
export const toUpperCase = (arrFriends) => {
  return arrFriends.map(friend => {
    return {name: friend.name.toUpperCase(), surname: friend.surname.toUpperCase()}
  })
}

export const sortFriendsByName = (arrFriends) => {
  return arrFriends.sort((a, b) => {
    if (a.surname < b.surname) return -1;
    else if (a.surname === b.surname) {
      if (a.name < b.name) return -1;
      else return 1;
    }
  })
}
