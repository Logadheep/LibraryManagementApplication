import React from 'react'
import './Dashboard.css'

const Dashboard = () => {
	return (
		<div className="dashboard">
			<div className="dashboard__header">
				<h1>Dashboard</h1>
			</div>
			<div className="dashboard__body">
				<div className="dashboard__card">
					<div className="dashboard__card__header">
						<h2>Books Issued</h2>
					</div>
					<div className="dashboard__card__body">
						<p>0</p>
					</div>
				</div>
				<div className="dashboard__card">
					<div className="dashboard__card__header">
						<h2>Books Returned</h2>
					</div>
					<div className="dashboard__card__body">
						<p>0</p>
					</div>
				</div>
				<div className="dashboard__card">
					<div className="dashboard__card__header">
						<h2>Books Overdue</h2>
					</div>
					<div className="dashboard__card__body">
						<p>0</p>
					</div>
				</div>
				<div className="dashboard__card">
					<div className="dashboard__card__header">
						<h2>Books Lost</h2>
					</div>
					<div className="dashboard__card__body">
						<p>0</p>
					</div>
				</div>
			</div>
			<div className="record__body">
				<div className="record__card">
					<div className="record__card__header">
						<h2>Currently issued books</h2>
					</div>
					<div className="record__card__body">
						<div className="record__card__body__item">
							<h3>Book 1</h3>
							<p>Issued on: 01/01/2021</p>
							<p>Due on: 01/01/2021</p>
						</div>
						<div className="record__card__body__item">
							<h3>Book 2</h3>
							<p>Issued on: 01/01/2021</p>
							<p>Due on: 01/01/2021</p>
						</div>
						<div className="record__card__body__item">
							<h3>Book 2</h3>
							<p>Issued on: 01/01/2021</p>
							<p>Due on: 01/01/2021</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Dashboard