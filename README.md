# Booking API

Se habilitaron los verbos básicos (get, put, post, delete) para cada uno de los tres endpoints: bookings, users y rooms.

## Booking endpoint

El endpoint de bookings sirve para administrar las reservas, además de los básicos se habilitaron también traer un detalle de reserva por id (getBookingById) con el fin de mostrar la información de una reserva. Así mismo se habilitó traer todas las reservas para un usuario, en caso de que este quiera visualizar esta información (getBookingByUserId). Si un usuario decide que no quiere tomar una reserva, la puede cancelar, para ello se hace uso del endpoint descrito en cancelBooking. Por último, el estado de una reserva se puede cambiar mediante el endpoint descrito en updateBookingStatus.

## Rooms endpoint

Este endpoint es para la administración de cada uno de las entidades que ofrecen alojamiento, permite que creen, actualicen, eliminen o revisen lo que ofertan. En caso de que una de las habitaciones, casas o espacios en general no esté disponible por un tiempo (por ejemplo los dueños harán mantenimiento), se puede hacer uso del endpoint descrito en updateRoomStatus para que esté temporalmente fuera de servicio.

## Users endpoint

Este endpoint es para la administración de los usuarios.
