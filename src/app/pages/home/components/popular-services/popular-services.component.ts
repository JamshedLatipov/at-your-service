import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Service {
  name: string;
  imageUrl: string;
  isActive?: boolean;
}

@Component({
  selector: 'app-popular-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './popular-services.component.html',
  styleUrl: './popular-services.component.scss'
})
export class PopularServicesComponent {
  services: Service[] = [
    {
      name: 'Plumbing',
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDQy-bR5wVSI2vpquzkzKJH9sh-5mt8e_pkMj-YiUZtCwAptyXcVRzkBdDABVKQxdLP3C3VPmV5hhgIcpb2N-y2vHvB0_pyhpJYySsp-vQDLIexTXqTAf_iFCl7Hsnx9o0OQKvNWl1xwk6rIRcc6OuDS84ncLjzhghXYPHEKgTysnQS3oPOsHacF52kFUtstVu0PClDuaadG-T3gJ-HL_oMenWcX-7NZ81uWZVBc7FZbyKkN8_dVDzSOylhSH89G7DsNmaCHpbh3e10',
      isActive: true
    },
    {
      name: 'Electrician',
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBCphrTxLVQxiqtaNTziFH9bUePsMkcu5cB-YGhLDCRKtZ1fflRlTZo2S9MDxUvuaXjyBfuofdDH2QUnt0rlkc34JoGee7CSyHWus_-avB6tLooUxae8UbH_7x0novP4mMV33MaaYRmVNDrPrlzp5kltRfVXn6kIr5Ua9lDIT2pR3wWMDfiyTm8CYgaE_jS-j6Bk0GKM2jJDMTGIGY4W2n1DuKHmyJ0vv6sTkC_EbyuDf_y9dPMYYGh54l9KsVl-IJYXEN8GAwAiHEg'
    },
    {
      name: 'House Cleaning',
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAosrpL8udbqaY4x9FmVMC_EAKyJHe13H8Fdno_2g1xNH77Ybr8cUElZ7b8EEKrPotjqw60iOWb1ltAO9ZJZnUeVtkxiII6IkuIwtYrpnAWNspAWtr50BulXXqpjPAwxqSlETbZd9PIVF0eS7ahk1yGfarbTzZIanmlHBRZDMoFUWjtin-gwnoy7fA0RxeN-dXHRglj7to_uGDVL7dD_Y1yxwvYLhTxPWadzM4O5TxPxi87b2biyxkvtGhCysEptY1xjGsiLjovSZ01'
    },
    {
      name: 'Handyman',
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBSQJGv0Y2u-9aL8opW0xdLBqyGc4WwrfQ8sU5yNyzUIcVTV6CrlvvpPXGi9769keDqw2tGrUut6J8qPT9r6y8paXX50_sC8BsctGvf0EAfCJnUcF6DAZLvw7BaAWO3Dwu-VFoWSUXJNlhWDfagfOCA3TF92txAoTQ7wr56k8ZqQn1sOopKxH9rqyhMd40Gvm2tMMkrQKR4qRwmeKYSHh1U5pJ1-5gVtHyY6ewsItsJSlLkl5eAUuPh-XRS-tlnWetgL2S_JQ4MDh4w'
    },
    {
      name: 'Painting',
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB4CgQm-q26rIuAPNe2cglPsDYCjXYiDf-AEP7JeiGEJMCrp7T1MLkH3RdRTsiGkJ56rokNGB9fwcHRQj_mA3MvpLkECa374bIKnoV5SBaWpVEAaY3Rwggx4urtGlnOWN2zUwGgNIZ-2o48eHvFRJfdJqh6Q_yl1zDMhDtJHQjAJ3MkUu610HB6_RUrxEeOibQSBN966CTXoEr5My5WwtqedvFCb5H4mwQVCOO01MuTHqAxh5rvXZ5ZtnvodvN-ZV2mYaNWEkRWKxe8'
    },
    {
      name: 'Landscaping',
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCJehokrlwDuQziUt6vibxpBbTLPVi3pyClSVVxK9RP73L7763Ud9Prs2atwplyBA5XwBy3H4iRq9HtPUpAeHnv8CcHv8SW5lY0KgAmBnutDH1ViBF26pR9l_ZFx4BG8SOlb_OLrFyi28DeLKj-w4g2_NvvjR2bjMa7HSxBSgHt9O1p42WL0TpSGdEq_kUtFZFDUN1zpbjsdcsVmP1A1PoWrdsJqDO8BjSkhq33M4VDy07dOjHiZwuM_MpC-CZJA_8WreuPr_02Avwd'
    }
  ];
}
