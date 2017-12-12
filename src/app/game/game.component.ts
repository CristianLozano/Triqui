import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  public saveNames(){
    this.player1 = document.getElementById("In1").value;
    this.player2 = document.getElementById("In2").value;
  }

  public default(){

  }

  public display() {
    var x = document.getElementById("first");
    var y = document.getElementById("second"):
    if (x.style.display === "none") {
      x.style.display = "block";
      if (y.style.display === "none") {
        y.style.display = "block";
      } else {
          y.style.display = "none";
      }
    } else {
        x.style.display = "none";

        if (y.style.display === "none") {
          y.style.display = "block";

        } else {
            y.style.display = "none";
        }
    }
  }

  public move(id) {
    var top = window.getComputedStyle(document.getElementById(id)).getPropertyValue('top');
    var left = window.getComputedStyle(document.getElementById(id)).getPropertyValue('left');
    document.getElementById(turno).style.top=top;
    document.getElementById(turno).style.left=left;
    console.log(turno + " " + id);
    if ((turno % 2) == 0) {
      positions[id.slice(0,-1)-1] = 1;
    } else {
      positions[id.slice(0,-1)-1] = 0;
    }
    console.log(positions);
    turno += 1;
    if(turno == 10){
      turno =1;
    }
    if(positions[0] == positions[1] && positions[1] == positions[2] && positions[0] == positions[2] && positions[0] != '-1' && positions[1] != '-1' && positions[2] != '-1'){
      if ((turno % 2) == 0){
        this.punt1 += 1;
        ganador = 1;
      } else {
        this.punt2 += 1;
        ganador = 1;
      }
      positions[0] = positions[1] = positions[2] = -1;
    } else if (positions[3] == positions[4] && positions[4] == positions[5] && positions[3] == positions[5]  && positions[3] != '-1' && positions[4] != '-1' && positions[5] != '-1'){
      if ((turno % 2) == 0){
        this.punt1 += 1;
        ganador = 1;
      } else {
        this.punt2 += 1;
        ganador = 1;
      }
      positions[3] = positions[4] = positions[5] = -1;
    } else if (positions[6] == positions[7] && positions[7] == positions[8] && positions[6] == positions[7]  && positions[6] != '-1' && positions[7] != '-1' && positions[8] != '-1'){
      if ((turno % 2) == 0){
        this.punt1 += 1;
        ganador = 1;
      } else {
        this.punt2 += 1;
        ganador = 1;
      }
      positions[6] = positions[7] = positions[8] = -1;
    }else if (positions[0] == positions[3] && positions[3] == positions[6] && positions[10 == positions[6]  && positions[0] != '-1' && positions[3] != '-1' && positions[6] != '-1'){
      if ((turno % 2) == 0){
        this.punt1 += 1;
        ganador = 1;
      } else {
        this.punt2 += 1;
        ganador = 1;
      }
      positions[0] = positions[3] = positions[6] = -1;
    } else if (positions[1] == positions[4] && positions[4] == positions[7] && positions[1] == positions[7]  && positions[1] != '-1' && positions[4] != '-1' && positions[7] != '-1'){
      if ((turno % 2) == 0){
        this.punt1 += 1;
        ganador = 1;
      } else {
        this.punt2 += 1;
        ganador = 1;
      }
      positions[1] = positions[4] = positions[7] = -1;
    } else if (positions[2] == positions[5] && positions[5] == positions[8] && positions[2] == positions[8]  && positions[2] != '-1' && positions[5] != '-1' && positions[8] != '-1'){
      if ((turno % 2) == 0){
        this.punt1 += 1;
        ganador = 1;
      } else {
        this.punt2 += 1;
        ganador = 1;
      }
      positions[2] = positions[5] = positions[8] = -1;
    } else if (positions[0] == positions[4] && positions[4] == positions[8] && positions[0] == positions[8]  && positions[0] != '-1' && positions[4] != '-1' && positions[8] != '-1'){
      if ((turno % 2) == 0){
        this.punt1 += 1;
        ganador = 1;
      } else {
        this.punt2 += 1;
        ganador = 1;
      }
      positions[0] = positions[4] = positions[8] = -1;
    } else if (positions[6] == positions[4] && positions[4] == positions[2] && positions[6] == positions[2]  && positions[6] != '-1' && positions[4] != '-1' && positions[2] != '-1'){
      if ((turno % 2) == 0){
        this.punt1 += 1;
        ganador = 1;
      } else {
        this.punt2 += 1;
        ganador = 1;
      }
      positions[2] = positions[4] = positions[6] = -1;
    }
    if ( ganador == 1 ){
      console.log("ganador");
      document.getElementById("1b").disabled = true;
      document.getElementById("2b").disabled = true;
      document.getElementById("3b").disabled = true;
      document.getElementById("4b").disabled = true;
      document.getElementById("5b").disabled = true;
      document.getElementById("6b").disabled = true;
      document.getElementById("7b").disabled = true;
      document.getElementById("8b").disabled = true;
      document.getElementById("9b").disabled = true;
      ganador = 0;
    }
  }

  punt1 = 0:
  punt2 = 0;
  var player1 = null;
  var player2 = null;
  var positions = [-1,-1,-1,-1,-1,-1,-1,-1,-1];
  var turno = 1;
  var partida = 0;
  var ganador = 0;
}
