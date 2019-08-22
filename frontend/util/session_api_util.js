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

export const editUser = ({formData, id}) => {
  return (
  $.ajax({
    method: 'PATCH',
    url: `/api/users/${id}`,
    data: formData,
    contentType: false,
    processData: false,
  }));
}

export const editBand = band => (
  $.ajax({
    method: 'PATCH',
    url: `/api/bands/${band.id}`,
    data: { band }
  })
)

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

export const fetchAllAlbums = () => (
  $.ajax({
    method: "get",
    url: `/api/albums`
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

export const fetchUser = id => (
  $.ajax({
    method: "get",
    url: `/api/users/${id}`
  })
)

export const createFollow = ({band_id, fan_id}) => (
  $.ajax({
    method: "post",
    url: `/api/follows`,
    data: {follow: {band_id, fan_id}}
  })
)

export const deleteFollow = ({band_id, fan_id}) => (
  $.ajax({
    method: "delete",
    url: `/api/follows/${fan_id}`,
    data: {follow: {band_id, fan_id}}
  })
)

export const createPurchase = ({album_id, user_id}) => (
  $.ajax({
    method: "post",
    url: '/api/purchases',
    data: {purchase: {album_id, user_id}}
  })
)