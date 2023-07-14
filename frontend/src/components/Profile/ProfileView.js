import React from 'react'
import './ProfileView.css'

const ProfileView = () => {
    return (
        <div className="profile-viewer">
            <div className="profile-viewer__header">
                <h1>Your Profile</h1>
            </div>
            <div className="profile-viewer__body">
                <div className="profile-viewer__card">
                    <div className="profile-viewer__card__header">
                        <h2>Personal Information</h2>
                    </div>
                    <div className="profile-viewer__card__body">
                        <div className="profile-viewer__card__body__item">
                            <h3>First Name</h3>
                            <p>John</p>
                        </div>
                        <div className="profile-viewer__card__body__item">
                            <h3>Last Name</h3>
                            <p>Doe</p>
                        </div>
                        <div className="profile-viewer__card__body__item">
                            <h3>Email</h3>
                            <p>
                                <a href="mailto:johndoe@examplemail.com"> JohnDoe's Email</a>
                            </p>
                        </div>
                        <div className="profile-viewer__card__body__item">
                            <h3>Phone Number</h3>
                            <p>123-456-7890</p>
                        </div>
                    </div>
                </div>
                <div className="profile-viewer__card">
                    <div className="profile-viewer__card__header">
                        <h2>Address</h2>
                    </div>
                    <div className="profile-viewer__card__body">
                        <div className="profile-viewer__card__body__item">
                            <h3>Street Address</h3>
                            <p>1234 Main St.</p>
                        </div>
                        <div className="profile-viewer__card__body__item">
                            <h3>City</h3>
                            <p>City</p>
                        </div>
                        <div className="profile-viewer__card__body__item">
                            <h3>State</h3>
                            <p>State</p>
                        </div>
                        <div className="profile-viewer__card__body__item">

                            <h3>Zip Code</h3>
                            <p>Zip Code</p>
                        </div>
                    </div>
                </div>
                <div className="profile-viewer__card">
                    <div className="profile-viewer__card__header">
                        <h2>Book Record</h2>
                    </div>
                    <div className="profile-viewer__card__body">
                        <div className="profile-viewer__card__body__item">
                            <h3>Books Issued</h3>
                            <p>0</p>
                        </div>
                        <div className="profile-viewer__card__body__item">
                            <h3>Books Returned</h3>
                            <p>0</p>
                        </div>
                        <div className="profile-viewer__card__body__item">
                            <h3>Books Overdue</h3>
                            <p>0</p>
                        </div>
                        <div className="profile-viewer__card__body__item">
                            <h3>Books Lost</h3>
                            <p>0</p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileView