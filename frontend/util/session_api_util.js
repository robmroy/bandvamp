export const login = user => (
  $.ajax({
    method: 'POST',
    url: '/api/session',
    data: { user }
  })
);

export const signup = user => (
  $.ajax({
    method: 'POST',
    url: `/api/users`,
    data: { user }
  })
);

export const logout = () => (
  $.ajax({
    method: 'DELETE',
    url: '/api/session'
  })
);

export const fetchAlbum = (id) => (
  $.ajax({
    method: "get",
    url: `/api/albums/${id}`
  })
)

export const postAlbum = formData => (
  $.ajax({
    method: "post",
    url: '/api/albums',
    data: formData,
    contentType: false,
    processData: false
  })
);
export const postSong= formData => (
  $.ajax({
    method: "post",
    url: '/api/songs',
    data: formData,
    contentType: false,
    processData: false
  })
);

export const fetchBand = id => (
  $.ajax({
    method: "get",
    url: `/api/bands/${id}`
  })
)