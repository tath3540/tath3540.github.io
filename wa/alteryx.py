import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
import matplotlib.pyplot as plt

# Load data from the Excel file
file_path = 'overtime.xlsx'  # Replace with the actual path to your Excel file
df = pd.read_excel(file_path)

# Feature Engineering (if needed)

# Train-Test Split
X = df[['Month']]
y = df['Count']

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Model Training
model = LinearRegression()
model.fit(X_train, y_train)

# Prediction for Future Trends
# Assuming you want to predict for future months, adjust this based on your needs
future_months = pd.DataFrame({'Month': range(13, 25)})  # Predicting for months 13 to 24
future_predictions = model.predict(future_months)

# Visualize Change Over Time for Bike Types and User Segments
# Assuming the dataset includes columns like 'rideable_type', 'member_casual', and 'Count'
fig, axes = plt.subplots(nrows=2, ncols=1, figsize=(10, 8))

# Plot for Bike Types
bike_types = df['rideable_type'].unique()
for bike_type in bike_types:
    subset = df[df['rideable_type'] == bike_type]
    axes[0].plot(subset['Month'], subset['Count'], label=bike_type)

axes[0].set_title('Change Over Time for Bike Types')
axes[0].set_xlabel('Month')
axes[0].set_ylabel('Count')
axes[0].legend()

# Plot for User Segments
user_segments = df['member_casual'].unique()
for user_segment in user_segments:
    subset = df[df['member_casual'] == user_segment]
    axes[1].plot(subset['Month'], subset['Count'], label=user_segment)

axes[1].set_title('Change Over Time for User Segments')
axes[1].set_xlabel('Month')
axes[1].set_ylabel('Count')
axes[1].legend()

plt.tight_layout()
plt.show()
