export const signup = user => (
  $.ajax({
    type: "POST",
    url: "api/users",
    data: { user }
  })
)

export const login = user => (
  $.ajax({
    type: "POST",
    url: "api/session",
    data: { user }
  })
)

export const logout = (id) => (
  $.ajax({
    type: "DELETE",
    url: "api/session"
  })
)