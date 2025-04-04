import { Component, OnDestroy, OnInit } from '@angular/core';
import { Friend } from '../../model/friend';

@Component({
  selector: 'app-friends',
  standalone: false,
  templateUrl: './friends.component.html',
  styleUrl: './friends.component.css'
})
export class FriendsComponent implements OnInit, OnDestroy {
  title: string = "Friends list";
  friends: Friend[] = [];
  newFriend: Friend = new Friend();
  validFriend: boolean = false;
  
  
  ngOnInit(): void {
    // initialization - add some friends
    this.friends.push(new Friend("Harry Potter", 15, "Harryp@wizard.com", false));
    this.friends.push(new Friend("Hermione Granger", 16, "Hermione@wizard.com", true));
    this.friends.push(new Friend("Ronald Weasley", 22, "WeasleyR@wizard.com", false));
  }
  ngOnDestroy(): void {
    // clean up
  }
  addFriend() {
    this.friends.push(this.newFriend);
    this.newFriend = new Friend();
  }
}
