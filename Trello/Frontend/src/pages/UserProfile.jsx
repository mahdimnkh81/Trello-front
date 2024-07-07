import { useState } from 'react';
import Profile from "../asserts/Img/Avatar.png"
import './UserProfile.css';

const UserProfile = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [name, setName] = useState('علی رضایی');
    const [email, setEmail] = useState('ali.rezaei@example.com');
    const [date, setDate] = useState('۱۰ تیر ۱۴۰۳');

    const toggleEditForm = () => {
        setIsEditing(!isEditing);
    };

    const updateProfile = (event) => {
        event.preventDefault();
        const updatedName = event.target.editName.value;
        const updatedEmail = event.target.editEmail.value;
        const updatedDate = event.target.editDate.value;

        if (updatedName) setName(updatedName);
        if (updatedEmail) setEmail(updatedEmail);
        if (updatedDate) setDate(updatedDate);

        toggleEditForm();
    };

    return (

<div>
        <div className="flex justify-center items-center w-full">
            <div className="flex flex-col justify-start items-center w-5/6">
                <div className="flex justify-start items-center w-full p-10">
                    <img src={Profile} alt="" />
                    <div className="flex flex-col p-5">
                        <h3 className="font-bold text-silverbold"> Mahdi Mansorikhah</h3>
                        <h3 className="font-medium text-silverbold"> @mahdi_m</h3>
                    </div>
                </div>
                <div className="flex items-center w-full p-10">
                    <ul className="flex flex-row border-b border-silver w-full">
                        <li className="p-3 text-primary font-bold border-b-2 ">Profile</li>
                        <li className="p-3 text-borderlite font-bold">Activity</li>
                        <li className="p-3 text-borderlite font-bold">Cards</li>
                        <li className="p-3 text-borderlite font-bold">Setting</li>
                    </ul>
                </div>
            </div>

        </div>
<div className="innertag">
    <div className="profile-container">
        <h1>پروفایل کاربر</h1>
        <div className="profile-info">
            <p><strong>نام:</strong> <span>{name}</span></p>
            <p dir="rtl"><strong>ایمیل:</strong> <span>{email}</span></p>
            <p><strong>تاریخ عضویت:</strong> <span>{date}</span></p>
        </div>
        <div className="button-group">
            <button className="edit-button" onClick={toggleEditForm}>ویرایش مشخصات</button>
            {"      "}
            <button className="logout-button">خروج</button>
            {"      "}
            <button className="delete-button">حذف حساب کاربری</button>
        </div>
        {isEditing && (
            <div className="edit-form">
                <h2>ویرایش مشخصات</h2>
                <form onSubmit={updateProfile}>
                    <label htmlFor="editName">نام:</label>
                    <input type="text" id="editName" name="editName" defaultValue={name} required />
                    <label htmlFor="editEmail">ایمیل:</label>
                    <input type="email" id="editEmail" name="editEmail" defaultValue={email} required />
                    <label htmlFor="editDate">تاریخ عضویت:</label>
                    <input type="text" id="editDate" name="editDate" defaultValue={date} required />
                    <button type="submit">ذخیره</button>
                </form>
            </div>
        )}
    </div>
</div>
</div>
    );
};

export default UserProfile;
