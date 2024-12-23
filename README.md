# Hospital Nueva Vida - Proyecto ReactJS

## Funcionalidades Implementadas

1. **Ruteo y Vistas Principales**

   - Home: Muestra servicios destacados.
   - Equipo Médico: Lista de doctores con filtro por especialidad.
   - Citas: Formulario para agendar citas y lista de citas agendadas.

2. **Gestión de Estado Global**

   - Uso de Context API para manejar:
     - Lista de servicios.
     - Lista de doctores.
     - Citas agendadas.

3. **Componentes Dinámicos**

   - ServiceList: Renderiza servicios desde el contexto.
   - DoctorList: Filtra y muestra la lista de doctores.
   - AppointmentForm: Formulario para agendar citas con validaciones.
   - AppointmentList: Muestra las citas agendadas.

4. **Validaciones y Optimización**

   - Validación de props con PropTypes.
   - Manejo de fechas válidas en el formulario de citas.
   - Optimización del DOM Virtual con React.Fragment.
   - Uso de React Profiler para análisis de rendimiento.

5. **Estilo Profesional**
   - Implementación de Material-UI para un diseño moderno y responsivo.

## Instalación y Ejecución

1. Clona el repositorio.
2. Instala las dependencias:
   ```bash
   npm install
   ```
