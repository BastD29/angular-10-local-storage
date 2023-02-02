import { Component } from '@angular/core';
import { StorageService } from './services/storage/storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  person = { name: '', country: '' };
  storageName: string | undefined;
  storageObject: Object = {};

  constructor(private storageService: StorageService) {}

  setStorage() {
    this.storageService.setItem('name', this.person.name);
    this.storageService.setItem('country', this.person.country);
    this.storageService.setItem('person', {
      name: this.person.name,
      country: this.person.country,
    });
    alert('Set storage variable and object successfull');
  }

  getStorage() {
    this.storageName = this.storageService.getItem('name');
    this.storageObject = this.storageService.getItem('person');
  }

  removeItemStorage(key: string) {
    this.storageService.removeItem(key);
  }

  clearAllStorage() {
    this.storageService.clear();
    this.storageName = '';
    this.storageObject = {};
  }
}
