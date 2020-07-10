import * as React from "react";
import { Card, CardContent, CardHeader } from "@material-ui/core";
import Logo from "../assets/logotipo.svg";

export default () => (
  <Card>
    <CardHeader
      title={<h2>Bienvenid@ al área de administración....</h2>}
      avatar={<img src={Logo} alt="Logo" height="250"></img>}
    />
    <CardContent>
      <ul>
        <li>
          El objetivo original del proyecto es Implementar una herramienta web
          de ayuda al personal médico en el diagnóstico y/o pronóstico de las
          enfermedades en pacientes atendidos en la Unidad Radiológica “Dr.
          Ramon Millán” de San Juan de los Morros estado Guárico.
        </li>
        <li>
          Dadas las condiciones de desarrollo y la naturaleza misma del
          proyecto, los objetivos específicos fueron ajustándose a medida que
          definía mejor el problema a tratar.
        </li>
        <li>
          Esta herramienta se presenta como una iteración mas en la búsqueda de
          la solución.
        </li>
      </ul>
    </CardContent>
  </Card>
);
