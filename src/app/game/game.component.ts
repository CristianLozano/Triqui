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
    let x = document.getElementById("In1") as HTMLInputElement;
    this.player1 = x.value;
    let y = document.getElementById("In2") as HTMLInputElement;
    this.player2 = y.value;
  }

  public default(){

  }

  public display() {
    var x = document.getElementById("first");
    var y = document.getElementById("second");
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
    document.getElementById(this.turno).style.top=top;
    document.getElementById(this.turno).style.left=left;
    console.log(this.turno + " " + id);
    if ((this.turno % 2) == 0) {
      this.positions[id.slice(0,-1)-1] = 1;
    } else {
      this.positions[id.slice(0,-1)-1] = 0;
    }
    console.log(this.positions);
    this.turno += 1;
    if(this.turno == 10){
      this.turno =1;
    }
    if(this.positions[0] == this.positions[1] && this.positions[1] == this.positions[2] && this.positions[0] == this.positions[2] && this.positions[0] != '-1' && this.positions[1] != '-1' && this.positions[2] != '-1'){
      if ((this.turno % 2) == 0){
        this.punt1 += 1;
        this.ganador = 1;
      } else {
        this.punt2 += 1;
        this.ganador = 1;
      }
      this.positions[0] = this.positions[1] = this.positions[2] = -1;
    } else if (this.positions[3] == this.positions[4] && this.positions[4] == this.positions[5] && this.positions[3] == this.positions[5]  && this.positions[3] != '-1' && this.positions[4] != '-1' && this.positions[5] != '-1'){
      if ((this.turno % 2) == 0){
        this.punt1 += 1;
        this.ganador = 1;
      } else {
        this.punt2 += 1;
        this.ganador = 1;
      }
      this.positions[3] = this.positions[4] = this.positions[5] = -1;
    } else if (this.positions[6] == this.positions[7] && this.positions[7] == this.positions[8] && this.positions[6] == this.positions[7]  && this.positions[6] != '-1' && this.positions[7] != '-1' && this.positions[8] != '-1'){
      if ((this.turno % 2) == 0){
        this.punt1 += 1;
        this.ganador = 1;
      } else {
        this.punt2 += 1;
        this.ganador = 1;
      }
      this.positions[6] = this.positions[7] = this.positions[8] = -1;
    }else if (this.positions[0] == this.positions[3] && this.positions[3] == this.positions[6] && this.positions[0] == this.positions[6]  && this.positions[0] != '-1' && this.positions[3] != '-1' && this.positions[6] != '-1'){
      if ((this.turno % 2) == 0){
        this.punt1 += 1;
        this.ganador = 1;
      } else {
        this.punt2 += 1;
        this.ganador = 1;
      }
      this.positions[0] = this.positions[3] = this.positions[6] = -1;
    } else if (this.positions[1] == this.positions[4] && this.positions[4] == this.positions[7] && this.positions[1] == this.positions[7]  && this.positions[1] != '-1' && this.positions[4] != '-1' && this.positions[7] != '-1'){
      if ((this.turno % 2) == 0){
        this.punt1 += 1;
        this.ganador = 1;
      } else {
        this.punt2 += 1;
        this.ganador = 1;
      }
      this.positions[1] = this.positions[4] = this.positions[7] = -1;
    } else if (this.positions[2] == this.positions[5] && this.positions[5] == this.positions[8] && this.positions[2] == this.positions[8]  && this.positions[2] != '-1' && this.positions[5] != '-1' && this.positions[8] != '-1'){
      if ((this.turno % 2) == 0){
        this.punt1 += 1;
        this.ganador = 1;
      } else {
        this.punt2 += 1;
        this.ganador = 1;
      }
      this.positions[2] = this.positions[5] = this.positions[8] = -1;
    } else if (this.positions[0] == this.positions[4] && this.positions[4] == this.positions[8] && this.positions[0] == this.positions[8]  && this.positions[0] != '-1' && this.positions[4] != '-1' && this.positions[8] != '-1'){
      if ((this.turno % 2) == 0){
        this.punt1 += 1;
        this.ganador = 1;
      } else {
        this.punt2 += 1;
        this.ganador = 1;
      }
      this.positions[0] = this.positions[4] = this.positions[8] = -1;
    } else if (this.positions[6] == this.positions[4] && this.positions[4] == this.positions[2] && this.positions[6] == this.positions[2]  && this.positions[6] != '-1' && this.positions[4] != '-1' && this.positions[2] != '-1'){
      if ((this.turno % 2) == 0){
        this.punt1 += 1;
        this.ganador = 1;
      } else {
        this.punt2 += 1;
        this.ganador = 1;
      }
      this.positions[2] = this.positions[4] = this.positions[6] = -1;
    }
    if ( this.ganador == 1 ){
      console.log("ganador");
      let x = document.getElementById("1b") as HTMLInputElement;
      x.disabled = true;
      x = document.getElementById("2b") as HTMLInputElement;
      x.disabled = true;
      x = document.getElementById("3b") as HTMLInputElement;
      x.disabled = true;
      x = document.getElementById("4b") as HTMLInputElement;
      x.disabled = true;
      x = document.getElementById("5b") as HTMLInputElement;
      x.disabled = true;
      x = document.getElementById("6b") as HTMLInputElement;
      x.disabled = true;
      x = document.getElementById("7b") as HTMLInputElement;
      x.disabled = true;
      x = document.getElementById("8b") as HTMLInputElement;
      x.disabled = true;
      x = document.getElementById("9b") as HTMLInputElement;
      x.disabled = true;
      this.ganador = 0;
    }
  }
  public rematch(){
    let x = document.getElementById("1b") as HTMLInputElement;
    x.disabled = false;
    x = document.getElementById("2b") as HTMLInputElement;
    x.disabled = false;
    x = document.getElementById("3b") as HTMLInputElement;
    x.disabled = false;
    x = document.getElementById("4b") as HTMLInputElement;
    x.disabled = false;
    x = document.getElementById("5b") as HTMLInputElement;
    x.disabled = false;
    x = document.getElementById("6b") as HTMLInputElement;
    x.disabled = false;
    x = document.getElementById("7b") as HTMLInputElement;
    x.disabled = false;
    x = document.getElementById("8b") as HTMLInputElement;
    x.disabled = false;
    x = document.getElementById("9b") as HTMLInputElement;
    x.disabled = false;
    this.ganador = 0;
    if ((this.partida % 2) == 1){
      let x = document.getElementById("1") as HTMLInputElement;
      x.style.top  ='40%';
      x.style.left ='20%';
      x = document.getElementById("2") as HTMLInputElement;
      x.style.top  ='40%';
      x.style.left ='3%';
      x = document.getElementById("3") as HTMLInputElement;
      x.style.top  ='40%';
      x.style.left ='20%';
      x = document.getElementById("4") as HTMLInputElement;
      x.style.top  ='40%';
      x.style.left ='3%';
      x = document.getElementById("5") as HTMLInputElement;
      x.style.top  ='40%';
      x.style.left ='20%';
      x = document.getElementById("6") as HTMLInputElement;
      x.style.top  ='40%';
      x.style.left ='3%';
      x = document.getElementById("7") as HTMLInputElement;
      x.style.top  ='40%';
      x.style.left ='20%';
      x = document.getElementById("8") as HTMLInputElement;
      x.style.top  ='40%';
      x.style.left ='3%';
      x = document.getElementById("9") as HTMLInputElement;
      x.style.top  ='40%';
      x.style.left ='20%';
      this.partida += 1;
      this.turno = 0;
    } else {
      let x = document.getElementById("1") as HTMLInputElement;
      x.style.top  ='40%';
      x.style.left ='3%';
      x = document.getElementById("2") as HTMLInputElement;
      x.style.top  ='40%';
      x.style.left ='20%';
      x = document.getElementById("3") as HTMLInputElement;
      x.style.top  ='40%';
      x.style.left ='3%';
      x = document.getElementById("4") as HTMLInputElement;
      x.style.top  ='40%';
      x.style.left ='20%';
      x = document.getElementById("5") as HTMLInputElement;
      x.style.top  ='40%';
      x.style.left ='3%';
      x = document.getElementById("6") as HTMLInputElement;
      x.style.top  ='40%';
      x.style.left ='20%';
      x = document.getElementById("7") as HTMLInputElement;
      x.style.top  ='40%';
      x.style.left ='3%';
      x = document.getElementById("8") as HTMLInputElement;
      x.style.top  ='40%';
      x.style.left ='20%';
      x = document.getElementById("9") as HTMLInputElement;
      x.style.top  ='40%';
      x.style.left ='3%';
      this.partida += 1;
      this.turno = 1;
    }
  }
  punt1 = 0;
  punt2 = 0;
  player1: String = null;
  player2: String = null;
  positions: any[] = [-1,-1,-1,-1,-1,-1,-1,-1,-1];
  turno: any = 1;
  partida: any = 1;
  ganador: any = 0;
}
