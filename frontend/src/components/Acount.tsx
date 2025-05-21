import React from 'react';
import { 
    IonCard,
    IonCardHeader,
    IonCardContent,
    IonCardTitle,
    IonItem,
    IonLabel,
    IonList,
    IonThumbnail,
    IonAvatar,
    IonBadge,
    IonIcon 
} from '@ionic/react';
import { personCircle, mailOutline, callOutline, locationOutline, trophyOutline } from 'ionicons/icons';
import '../css/acount.module.css'; 

const Account = () => {
    return (
        <div className="account-container">
            <IonCard className="modern-account-card">
                <div className="card-header-image">
                    <img 
                        alt="Profile background" 
                        src="https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                    />
                    <IonAvatar className="profile-avatar">
                        <img 
                            alt="User profile" 
                            src="https://ionicframework.com/docs/img/demos/avatar.svg" 
                        />
                    </IonAvatar>
                </div>

                <IonCardHeader className="profile-header">
                    <IonCardTitle className="profile-name">Jane Doe</IonCardTitle>
                    <IonBadge color="primary" className="profile-badge">Pro Member</IonBadge>
                </IonCardHeader>

                <IonCardContent className="profile-content">
                    <IonList lines="none" className="profile-details">
                        <IonItem className="detail-item">
                            <IonIcon icon={personCircle} slot="start" className="detail-icon" />
                            <IonLabel>@janedoe</IonLabel>
                        </IonItem>
                        
                        <IonItem className="detail-item">
                            <IonIcon icon={mailOutline} slot="start" className="detail-icon" />
                            <IonLabel>jane.doe@example.com</IonLabel>
                        </IonItem>
                        
                        <IonItem className="detail-item">
                            <IonIcon icon={callOutline} slot="start" className="detail-icon" />
                            <IonLabel>+1 234 567 890</IonLabel>
                        </IonItem>
                        
                        <IonItem className="detail-item">
                            <IonIcon icon={locationOutline} slot="start" className="detail-icon" />
                            <IonLabel>New York, USA</IonLabel>
                        </IonItem>
                        
                        <IonItem className="detail-item">
                            <IonIcon icon={trophyOutline} slot="start" className="detail-icon" />
                            <IonLabel>Member since 2020</IonLabel>
                        </IonItem>
                    </IonList>
                </IonCardContent>
            </IonCard>
        </div>
    );
}

export default Account;