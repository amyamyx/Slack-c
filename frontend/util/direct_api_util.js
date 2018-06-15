export const fetchDirects = teamId => (
  $.ajax({
    type: "GET",
    url: `api/teams/${teamId}/directs`
  })
)

export const fetchDirect = directId => (
  $.ajax({
    type: "GET",
    url: `api/directs/${directId}`
  })
)

// export const createDirect = teamId => (
// )

// export const updateDirect

