export const fetchUsers = () => (
  $.ajax({
    type: "GET",
    url: "api/users"
  })
)

